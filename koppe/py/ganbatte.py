from __future__ import annotations
import asyncio
import time
import math
import random as _random
import json
import os
from typing import Any, Dict, Iterable, List, Sequence, Tuple

# ---------- async delay ----------
async def delay(ms: int) -> None:
    """msミリ秒待つ（async版）"""
    await asyncio.sleep(ms / 1000.0)


# ---------- factorial (kaijou) ----------
def kaijou(num: int) -> int:
    """階乗。負は例外にする（JSコードは未処理だった）。"""
    if num < 0:
        raise ValueError("num must be >= 0")
    return math.factorial(num)


# ---------- prime check (isSosu) ----------
def is_sosu(num: int) -> bool:
    """素数判定。JS版のバグ（変数名間違い）を直した。"""
    if num < 2:
        return False
    if num in (2, 3):
        return True
    if num % 2 == 0:
        return False
    limit = int(num**0.5) + 1
    for i in range(3, limit, 2):
        if num % i == 0:
            return False
    return True


# ---------- arraySelect ----------
def array_select(array: Sequence[Any]) -> Any:
    """ランダム選択"""
    if not array:
        raise IndexError("array_select on empty sequence")
    return _random.choice(list(array))


# ---------- arrayShuffle ----------
def array_shuffle(array: List[Any]) -> List[Any]:
    """インプレースでシャッフルし、返す（JS挙動に合わせる）"""
    _random.shuffle(array)
    return array


# ---------- arraySize ----------
def array_size(array: Iterable[Any]) -> int:
    """ユニーク要素数（Setのサイズ）"""
    return len(set(array))


# ---------- arrayCount ----------
def array_count(array: Iterable[Any]) -> Dict[Any, int]:
    """各要素の出現回数を辞書で返す"""
    counts: Dict[Any, int] = {}
    for v in array:
        counts[v] = counts.get(v, 0) + 1
    return counts


# ---------- arrayMult ----------
def array_mult(array: Iterable[float]) -> float:
    """要素の積。空配列 -> 1（中立元）"""
    prod = 1
    for v in array:
        prod *= v
    return prod


# ---------- arrayGacha ----------
def array_gacha(array: Sequence[Any], probability: Sequence[float]) -> Any:
    """
    重みつき抽選。JS版と同じロジック（確率配列の合計を総和にしてランダムを引き、
    各確率を順に比較・減算していく方式）。
    """
    if len(array) != len(probability):
        raise ValueError("長さがあってないっす！先輩、ちゃんとチェックした方がいいっすよ〜？")
    total = sum(probability)
    if total <= 0:
        raise ValueError("probability sum must be > 0")
    r = _random.random() * total
    for i, p in enumerate(probability):
        if r < p:
            return array[i]
        r -= p
    # 浮動誤差対策
    return array[-1]


# ---------- hask (hasOwnProperty 風) ----------
def hask(obj: Dict[Any, Any], key: Any) -> int:
    """キーが存在すれば1, なければ0"""
    return 1 if key in obj else 0


# ---------- deep copy ----------
def copy_deep(moto: Any) -> Any:
    """簡易的な再帰コピー。複雑なオブジェクトは標準の copy.deepcopy を使うべき。"""
    import copy as _cpy
    try:
        return _cpy.deepcopy(moto)
    except Exception:
        # フォールバック（手作り）: list, dict, tuple, set を処理
        if isinstance(moto, list):
            return [copy_deep(x) for x in moto]
        if isinstance(moto, dict):
            return {k: copy_deep(v) for k, v in moto.items()}
        if isinstance(moto, tuple):
            return tuple(copy_deep(x) for x in moto)
        if isinstance(moto, set):
            return {copy_deep(x) for x in moto}
        return moto


# ---------- probability ----------
def probability(num: float) -> bool:
    """num% の確率で True を返す（例: num==20 => 20%でTrue）"""
    return (_random.random() * 100.0) <= num


# ---------- random(min,max) ----------
def random_int(min_val: int, max_val: int) -> int:
    """JSの random(min,max) と同等（両端含む）"""
    return _random.randint(min_val, max_val)


# 名前を JS と同じにしておく（必要なら import して使って）
random = random_int


# ---------- anagramSaySay ----------
def anagram_say_say(text: str, loop: int = 10, bet: str = "<br>") -> str:
    """
    テキストのアナグラム（シャッフル）を loop 回生成して結合して返す。
    JS ロジックを可能な限り再現。ただし無限ループに注意してガードを入れてある。
    """
    menjo = 0
    length = len(text)
    if length < 4:
        menjo = 1
        print("長さが3以下なんで最大6っす")

    optout = list(text)
    optcou = array_count(optout)
    optvals = []
    for a in optcou.keys():
        b = optcou[a]
        b = kaijou(b)
        optvals.append(b)
    optmat = array_mult(optvals) if optvals else 1
    cal = (kaijou(length) // optmat) - 1 if length >= 0 else 0

    loopen = loop
    print(f"総数:{cal} 回数:{loopen}")
    if cal < loopen:
        menjo = 1

    reses: List[str] = []
    attempts = 0
    max_attempts = max(5000, loopen * 1000)  # 無限ループ回避
    while loopen > 0 and attempts < max_attempts:
        attempts += 1
        shuffled = optout[:]  # shallow copy
        _random.shuffle(shuffled)
        res = "".join(shuffled)
        if res in reses:
            # JS: 重複だったら loopen += 1 -> つまりカウントを消費しない
            continue
        if res == text and not menjo:
            # オリジナルは飛ばす
            continue
        if res == text and menjo and len(reses) < cal:
            continue
        elif res == text and menjo:
            res = "[重複エラー]"
        reses.append(res)
        loopen -= 1

    if attempts >= max_attempts:
        print("注意: アナグラム生成で上限に達した（完全な組合せが足りないか、重複が多い）。")

    return bet.join(reses)


# ---------- localStorage 風 (ファイルを使う) ----------
_LOCAL_STORAGE_PATH = os.path.join(os.getcwd(), "local_storage.json")


def _load_local_storage() -> Dict[str, str]:
    if not os.path.exists(_LOCAL_STORAGE_PATH):
        return {}
    try:
        with open(_LOCAL_STORAGE_PATH, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return {}


def _save_local_storage(o: Dict[str, str]) -> None:
    with open(_LOCAL_STORAGE_PATH, "w", encoding="utf-8") as f:
        json.dump(o, f, ensure_ascii=False, indent=2)


def set_local_storage(name: str, value: str) -> None:
    s = _load_local_storage()
    s[name] = value or ""
    _save_local_storage(s)


def get_local_storage(name: str) -> str | None:
    s = _load_local_storage()
    return s.get(name)


# ---------- r: logic object ----------
class R:
    @staticmethod
    def and_(lef: bool, rig: bool) -> int:
        return 1 if (lef and rig) else 0

    @staticmethod
    def or_(lef: bool, rig: bool) -> int:
        return 1 if (lef or rig) else 0

    @staticmethod
    def xor(lef: bool, rig: bool) -> int:
        print("排他的論理和発動！！")
        l = 1 if lef else 0
        r = 1 if rig else 0
        return 1 if l != r else 0

    @staticmethod
    def not_(lef: bool) -> int:
        return 0 if lef else 1

    @staticmethod
    def nand(lef: bool, rig: bool) -> int:
        return 0 if (lef and rig) else 1

    @staticmethod
    def nor(lef: bool, rig: bool) -> int:
        return 0 if (lef or rig) else 1

    @staticmethod
    def xnor(lef: bool, rig: bool) -> int:
        print("逆排他的論理和発動！！")
        l = 1 if lef else 0
        r = 1 if rig else 0
        return 0 if l != r else 1


r = R()


# ---------- error (JSはウィンドウ閉じる挙動) ----------
async def error() -> None:
    print("errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")
    await delay(2000)
    # Pythonでは強制終了にする
    raise SystemExit("error() called")


# ---------- hoshoku (補色) ----------
def hoshoku(color: str) -> str:
    """6桁HEXカラーの補色を返す。先頭の#はあってもなくてもOK。"""
    c = color.lstrip("#")
    if len(c) != 6:
        raise ValueError("カラーコードは6桁、ですよ〜？楽しないでくださいね〜♪")
    r_val = int(c[0:2], 16)
    g_val = int(c[2:4], 16)
    b_val = int(c[4:6], 16)
    comp_r = f"{255 - r_val:02x}"
    comp_g = f"{255 - g_val:02x}"
    comp_b = f"{255 - b_val:02x}"
    return f"#{comp_r}{comp_g}{comp_b}"


# Export-ready names (JS風に)
__all__ = [
    "delay", "nico_text", "kaijou", "is_sosu", "array_select", "array_shuffle", "array_size",
    "array_count", "array_mult", "array_gacha", "hask", "copy_deep", "probability",
    "random", "anagram_say_say", "set_local_storage", "get_local_storage",
    "r", "error", "hoshoku"
]
