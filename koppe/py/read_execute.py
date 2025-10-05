import random
import re
import requests

executions = {}
allScripts = {}
context = {}
readed = []

async def execute(arr):
    functionName, *args = arr
    await executions[functionName](*args)

def load_script_file(src):
    url = f"assets/txts/{src}.txt"
    res = requests.get(url)
    if not res.ok:
        raise Exception("読み込み失敗")
    
    text = res.text
    lines = text.splitlines()
    
    current_section = None
    sections = {}

    for line in lines:
        line = line.strip()
        if line == '' or line.startswith('//'):
            continue
        if line.startswith('@'):
            current_section = line[1:].strip()
            sections[current_section] = []
            continue
        if current_section:
            sections[current_section].append(line)

    allScripts[src] = sections
    return sections

async def read(gen):
    readed.append(gen)
    bunkatsu = gen.split('\n')

    stack = []
    skip = False

    for moto in bunkatsu:
        raw = [x.strip() for x in moto.strip().split(',')]
        if len(raw) == 0:
            continue

        line = list(filter(lambda x: x is not None and x != '', [revision(token) for token in raw]))

        for i in range(len(line)):
            le = line[i]
            if not isinstance(le, (str, int, float)):
                if isinstance(le, list):
                    num = len(le)
                    if num == 0:
                        line.pop(i)
                        continue
                    line.pop(i)
                    for i2, elem in enumerate(le):
                        line.insert(i + i2, revision(elem))
                    continue
                if isinstance(le, dict):
                    print(line)
                    raise Exception("さすがにエラー...もっかい↑これ↑、確認して？")

        cmd = line[0]

        if cmd == 'if':
            _, left, operator, right = line
            left, right = float(left), float(right)
            condition = False
            if operator == '==': condition = left == right
            elif operator == '!=': condition = left != right
            elif operator == '<': condition = left < right
            elif operator == '>': condition = left > right
            elif operator == '<=': condition = left <= right
            elif operator == '>=': condition = left >= right
            else:
                print(f"演算子{operator}は使えませんわ〜〜〜！！")
            print(f"if:: ({left} {operator} {right}) => {condition}")
            stack.append(condition)
            skip = not condition
            continue

        if cmd == 'else':
            if len(stack) == 0:
                print("ifがないのにelseされてるっす、先輩！！")
            prev = stack[-1]
            skip = prev
            continue

        if cmd == 'edif':
            if len(stack) == 0:
                print("ifがないのにedifされてるっす、先輩！！")
            stack.pop()
            skip = any(not val for val in stack)
            continue

        if skip:
            continue

        res = await enter(line)
        if res == 'continue':
            continue
        if res == 'break':
            break

async def enter(line):
    cmd = line[0]
    if cmd == 'log':
        _, text = line
        logadd(text)
    elif cmd == 'nico':
        _, text = line
        nicoText(text)
    elif cmd == '変数':
        _, name, value, *rest = line
        print(f"変数:: {name} {value} {rest}")
        if rest:
            value2 = rest[0]
            if value == '=':
                context[name] = value2
            elif value == '+=':
                context[name] = context.get(name, 0) + float(value2)
            elif value == '-=':
                context[name] = context.get(name, 0) - float(value2)
            elif value == '*=':
                context[name] = context.get(name, 0) * float(value2)
            elif value == '/=':
                context[name] = context.get(name, 0) / float(value2)
            print(f"=> {context[name]}")
        else:
            context[name] = value
    elif cmd == '乱数生成':
        _, minv, maxv = map(int, line)
        num = random.randint(minv, maxv)
        print(f"乱数生成:: {minv} ~ {maxv} => {num}")
        context['乱数'] = num
    elif cmd == '攻撃タイプランダム変更':
        _, *arr = line
        context['攻撃タイプ'] = random.choice(arr)
    elif cmd == 'ログ追加':
        _, text = line
        addlog(text)
    elif cmd == '話者変更':
        _, name = line
        context['話者'] = name
    elif cmd == 'セリフ':
        _, text = line
        await addtext(f"{context.get('話者', '')}「{text}」")
    elif cmd == 'サウンド':
        _, name = line
        if name not in sounds:
            print(f'サウンド"{name}"がありませんぜ not existってやつだね')
            return
        sounds[name].stop()
        sounds[name].play()
    else:
        print(f"未知のコマンド: {cmd}")

def revision(moto):
    after = moto.strip() if isinstance(moto, str) else moto
    if after == '' or after is None:
        return ''

    if isinstance(after, list):
        return [revision(x) for x in after]
    if isinstance(after, dict):
        return {k: revision(v) for k, v in after.items()}

    if isinstance(after, str):
        if after.startswith('%%'):
            return ['変数', after[2:]]
        if after.startswith('%') and not after.startswith('%{'):
            return context.get(after[1:], '')
        return re.sub(r'%{(.*?)}', lambda m: str(context.get(m.group(1), '')), after)
    return after

# ダミー関数（実際の実装に置き換えてね）
def logadd(text):
    print(f"LOG: {text}")

def nicoText(text):
    print(f"NICO: {text}")

def addlog(text):
    print(f"ADDLOG: {text}")

async def addtext(text):
    print(f"TEXT: {text}")

class DummySound:
    def play(self):
        print("[Sound playing]")
    def stop(self):
        pass

sounds = {"test": DummySound()}
