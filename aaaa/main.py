import asyncio
import websockets
import webbrowser
import tkinter as tk
#import subprocess
import re
import random
import csv
#from random import randint as randomRange
#from random import shuffle as arrayShuffle
#from random import choice as arraySelect
from asyncio import sleep as delay
"""import socket
import os"""

csvdata={}

with open('book1.csv',"r",encoding="utf-8_sig", newline='') as f:
    for fa in csv.reader(f):
        try:
            csvdata[fa[0]]=fa[1:8]+[float(fa[8])/100]+fa[9:]
        except ValueError:
            csvdata[fa[0]]=fa[1:]
    del csvdata["name"]
    #わかんないなら説明しようか？  ありが当　ここのcsvdataてインベントリーアップデートでどんなことされてるの？
    #このデータはまあ辞書として読み込んでアイテムごとに使う感じになってるよ。　ありがとう　わかんなくなったらまたききます

print(csvdata)

itembox_item={}

root={}
#root["test"]=tk.Tk()
#root["test"].geometry("500x500+10+10")
flag={"red_button":True,"command_box":True,"craft_table":True}
canvas={}
pic_item="item_box"

inventry={}#name:{[[[x,y,ax,ay,item]..],width,hight,℃,Pa,{item:mutch,..}<-melt_item,{item:mutch,..}<-are_item]}


img={}

socketname=[]




def arrayGacha(array, probables):
    if len(array) != len(probables):
        raise ValueError("長さがあってないっす！先輩、ちゃんとチェックした方がいいっすよ〜？")
    total = sum(probables)
    r = random.uniform(0, total)
    for item, prob in zip(array, probables):
        if r < prob:
            return item
        r -= prob

def probability(num):
    return random.uniform(0, 100) <= num

def sendData(text):
    for name in socketname:
        asynceventroop.create_task(name.send(text))



async def handler(websocket):
    global root
    global socketname
    global pic_item
    try:
        async for message in websocket:
            print(message)
            if (len(socketname) > 1 )and(websocket not in socketname):
                print("cheater's elegant arrive!!!!!!!!!!!")
                #print(socketname)
                await websocket.send("Are you a cheater?")
                await websocket.close()
                break
            for a in socketname:
                if websocket!=a:
                    
                    try:
                        await a.send(str(message))
                    except Exception as e:
                        print(e)
                        print("cliant_disconect")
                        socketname.remove(websocket)
            if websocket not in socketname:
                socketname.append(websocket)
            if message == "chack":
                await websocket.send("now conecting 8001:localhost with python")
            elif message == "endgame":
                end()
            elif not(flag["red_button"]) and message=="red_button_del":
                window_del("red_button")()
            elif message == "red_button" and flag["red_button"]:
                root["red_button"]=tk.Tk()
                root["red_button"].geometry("250x250+100+100")
                root["red_button"].attributes("-toolwindow",True)
                root["red_button"].attributes("-topmost", True)
                root["red_button"].resizable(False, False)
                root["red_button"].protocol("WM_DELETE_WINDOW",window_del("red_button"))
                canvas["red_button"] = tk.Canvas(master=root["red_button"],bg = "white", width = 250,height = 300)
                canvas["red_button"].place(x = 0,y = 0)
                img["assets/images/red_buttn_off.png"]=tk.PhotoImage(file="assets/images/red_buttn_off.png", master=root["red_button"])
                canvas["red_button"].create_image(125,125,image = img["assets/images/red_buttn_off.png"],tag="red_button")
                canvas["red_button"].tag_bind("red_button","<ButtonPress>",red_button)
                flag["red_button"]=False
            elif not(flag["command_box"]) and message=="command_box_del":
                print("del_command_box")
                window_del("command_box")()
            elif message == "command_box" and flag["command_box"]:
                root["command_box"]=tk.Tk()
                root["command_box"].geometry("250x350+500+500") # width x height + x座標 + y座標
                root["command_box"].attributes("-toolwindow",True)
                root["command_box"].attributes("-topmost", True)
                root["command_box"].resizable(False, False)
                root["command_box"].protocol("WM_DELETE_WINDOW",window_del("command_box"))
                canvas["command_box"] = tk.Canvas(master=root["command_box"],bg = "white", width = 250,height = 350)
                canvas["command_box"].place(x = 0,y = 0)
                #####
                canvas["command_box_Entry"] = tk.Entry(master=canvas["command_box"],width=35, validate="all", validatecommand=(tk.Misc.register(canvas["command_box"],lambda S :True if re.match(re.compile('[0-9]+'), S) else False ), '%S'))
                canvas["command_box_Entry"].place(x=10, y=30)
                img["assets/images/1_off.png"]=tk.PhotoImage(file="assets/images/1_off.png", master=root["command_box"])
                canvas["command_box"].create_image(60,80,image = img["assets/images/1_off.png"],tag="command_box1")
                canvas["command_box"].tag_bind("command_box1","<ButtonPress>",lambda e,jj=1:plass_command_box_button(jj))
                img["assets/images/2_off.png"]=tk.PhotoImage(file="assets/images/2_off.png", master=root["command_box"])
                canvas["command_box"].create_image(120,80,image = img["assets/images/2_off.png"],tag="command_box2")
                canvas["command_box"].tag_bind("command_box2","<ButtonPress>",lambda e,jj=2:plass_command_box_button(jj))
                img["assets/images/3_off.png"]=tk.PhotoImage(file="assets/images/3_off.png", master=root["command_box"])
                canvas["command_box"].create_image(180,80,image = img["assets/images/3_off.png"],tag="command_box3")
                canvas["command_box"].tag_bind("command_box3","<ButtonPress>",lambda e,jj=3:plass_command_box_button(jj))
                img["assets/images/4_off.png"]=tk.PhotoImage(file="assets/images/4_off.png", master=root["command_box"])
                canvas["command_box"].create_image(60,160,image = img["assets/images/4_off.png"],tag="command_box4")
                canvas["command_box"].tag_bind("command_box4","<ButtonPress>",lambda e,jj=4:plass_command_box_button(jj))
                img["assets/images/5_off.png"]=tk.PhotoImage(file="assets/images/5_off.png", master=root["command_box"])
                canvas["command_box"].create_image(120,160,image = img["assets/images/5_off.png"],tag="command_box5")
                canvas["command_box"].tag_bind("command_box5","<ButtonPress>",lambda e,jj=5:plass_command_box_button(jj))
                img["assets/images/6_off.png"]=tk.PhotoImage(file="assets/images/6_off.png", master=root["command_box"])
                canvas["command_box"].create_image(180,160,image = img["assets/images/6_off.png"],tag="command_box6")
                canvas["command_box"].tag_bind("command_box6","<ButtonPress>",lambda e,jj=6:plass_command_box_button(jj))
                img["assets/images/7_off.png"]=tk.PhotoImage(file="assets/images/7_off.png", master=root["command_box"])
                canvas["command_box"].create_image(60,240,image = img["assets/images/7_off.png"],tag="command_box7")
                canvas["command_box"].tag_bind("command_box7","<ButtonPress>",lambda e,jj=7:plass_command_box_button(jj))
                img["assets/images/8_off.png"]=tk.PhotoImage(file="assets/images/8_off.png", master=root["command_box"])
                canvas["command_box"].create_image(120,240,image = img["assets/images/8_off.png"],tag="command_box8")
                canvas["command_box"].tag_bind("command_box8","<ButtonPress>",lambda e,jj=8:plass_command_box_button(jj))
                img["assets/images/9_off.png"]=tk.PhotoImage(file="assets/images/9_off.png", master=root["command_box"])
                canvas["command_box"].create_image(180,240,image = img["assets/images/9_off.png"],tag="command_box9")
                canvas["command_box"].tag_bind("command_box9","<ButtonPress>",lambda e,jj=9:plass_command_box_button(jj))
                img["assets/images/delet_off.png"]=tk.PhotoImage(file="assets/images/delet_off.png", master=root["command_box"])
                canvas["command_box"].create_image(60,320,image = img["assets/images/delet_off.png"],tag="command_boxdelet")
                canvas["command_box"].tag_bind("command_boxdelet","<ButtonPress>",lambda e:plass_command_box_delet())
                img["assets/images/0_off.png"]=tk.PhotoImage(file="assets/images/0_off.png", master=root["command_box"])
                canvas["command_box"].create_image(120,320,image = img["assets/images/0_off.png"],tag="command_box0")
                canvas["command_box"].tag_bind("command_box0","<ButtonPress>",lambda e,jj=0:plass_command_box_button(jj))
                img["assets/images/chack_off.png"]=tk.PhotoImage(file="assets/images/chack_off.png", master=root["command_box"])
                canvas["command_box"].create_image(180,320,image = img["assets/images/chack_off.png"],tag="command_boxchack")
                canvas["command_box"].tag_bind("command_boxchack","<ButtonPress>",lambda e:plass_command_box_chack())
                ###
                flag["command_box"]=False
            
            elif message == "craft_table" and flag["craft_table"]:
                root["craft_table"]=tk.Tk()
                root["craft_table"].geometry(f"350x350+{random.randint(1,500)}+500") # width x height + x座標 + y座標
                root["craft_table"].attributes("-toolwindow",True)
                root["craft_table"].attributes("-topmost", True)
                root["craft_table"].resizable(False, False)
                root["craft_table"].protocol("WM_DELETE_WINDOW",window_del("craft_table",itembox=["craft_table_1","craft_table_2","craft_table_3"]))
                canvas["craft_table"] = tk.Canvas(master=root["craft_table"],bg = "white", width = 350,height = 350)
                canvas["craft_table"].place(x = 0,y = 0)
                img["assets/images/craft_table_UI.png"]=tk.PhotoImage(file="assets/images/craft_table_UI.png", master=root["craft_table"])
                canvas["craft_table"].create_image(100,100,image = img["assets/images/craft_table_UI.png"],tag="craft_table")
                stan = 100; add = 47; aded = 0;
                for a in range(4):
                    for b in range(4):
                        aded += 1;
                        sx = stan + b*add;
                        sy = stan + a*add;
                        create_itembox("craft_table","craft_table",f"craft_table_{aded}",sx,sy)
                flag["craft_table"]=False
            elif message[:5]=="pick_":
                
                pic_item=message[5:]
            elif message[:11]=="input_item_":#f"imput_item_{name}_{x}_{y}_{item}"
                x=message[11:].split("_")
                inventry[str(x[0])][0]+=[[x[1],x[2],0,0,x[3]]]
            elif message[:16]=="create_inventry_":#f"create_inventry_{name}_{windth}_{higth}_{onndo}_{aturyoku}"
                x=message[16:].split("_")
                inventry[x[0]]=[[],x[1],x[2],x[3],x[4],{},{}]
            else:
                await websocket.send("だまれ～～～～～～～～")
            
            #print(message[:5])
            #print("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
            #for s in send:
            #    print("send:"+s)
            #    await websocket.send(str(s))
    except asyncio.exceptions.CancelledError:
        pass
async def main():
    try:
        async with websockets.serve(handler, "localhost", 8001):
            await asyncio.Future()  # run forevercopy
    except asyncio.exceptions.CancelledError:
        print("websockets:mainloop Cancelling now...")

async def mainloop_in_async():
    global root
    try:
        webbrowser.open("index.html")
        while True:
            for roots in list(root.values()):
                roots.update()
            await asyncio.sleep(1/120)
    except asyncio.exceptions.CancelledError:
        print("tkinter:mainloop Cancelling now...")



def end():
    global task
    global root
    for roots in root.values():
        try:
            roots.destroy()
        except tk.TclError:
            pass
    task.cancel()

def create_itembox(root_me,canvas_me,tag,x,y):
    img["assets/images/items/item_box.png"]=tk.PhotoImage(file="assets/images/items/item_box.png", master=root[root_me])
    canvas[canvas_me].create_image(x,y,image = img["assets/images/items/item_box.png"],tag=tag)
    itembox_item[tag]="item_box"
    canvas[canvas_me].tag_bind(tag,"<ButtonRelease-1>",lambda e,b=tag,c=canvas_me,r=root_me:plass_itembox_chack(b,c,r))

def plass_itembox_chack(tag,canvasname,rootname):
    global pic_item
    
    #if pic_item!="" :
    grafic["itembox"+tag]=tk.PhotoImage(file="assets/images/items/"+str(pic_item)+".png", master=root[rootname])
    canvas[canvasname].itemconfigure(tag,image=grafic["itembox"+tag])
    #canvas[canvasname].image = grafic["itembox"+pic_item]
    oo=pic_item
    try:
        pic_item=itembox_item[tag]
        itembox_item[tag]=oo
    except KeyError:
        itembox_item[tag]=oo
        pic_item="item_box"
    finally:
        sendData("pick"+str(pic_item))
    #elif pic_item in itembox_item.keys():
    #    if itembox_item[tag]!="":
    #        img["assets/images/item_box.png"]=tk.PhotoImage(file="assets/images/item_box.png", master=root[rootname])
    #        canvas[canvasname].itemconfigure(tag,image=img["assets/images/item_box.png"])
    #        pic_item=itembox_item[tag]
    #        itembox_item[tag]=""


def red_button(e):
    global asynceventroop
    #def a():
    sendData("logadd,「red_button」")
    sendData("soundPlay,doom")
    img=tk.PhotoImage(file="assets/images/red_buttn_on.png", master=root["red_button"])
    canvas["red_button"].itemconfigure("red_button",image=img)
    canvas["red_button"].image = img
    def a():
        #def b():
        root["red_button"].destroy()
        #canvas.pop("red_button")
        #root.pop("red_button")
        #print("aaaa")
        flag["red_button"]=True
        del canvas["red_button"],root["red_button"]
        #return b
    root["red_button"].after(3000,a)
    
        
    #return a

grafic={}

def plass_command_box_delet():
    canvas["command_box_Entry"].delete(len(canvas["command_box_Entry"].get())-1,tk.END)
    plass_command_box_button("delet")


def plass_command_box_chack():
    #sendData("logadd,pressed")
    val = canvas["command_box_Entry"].get()
    print(f"chack-{val}")
    sendData(f"logadd,入力 => {val}")#←おくれ！
    canvas["command_box_Entry"].delete(0,tk.END)
    plass_command_box_button("chack")
    

def plass_command_box_button(a):
    cl = str(a)
    # sendData("logadd,command_box_pressed")
    
    imgData = f"assets/images/{cl}_on.png"
    if cl == "chack" and probability(3):
        imgData = f"assets/images/{cl}_on_blue.png"
    
    
    grafic["command_box"+cl]=tk.PhotoImage(file=imgData, master=root["command_box"])
    canvas["command_box"].itemconfigure(f"command_box{cl}",image=grafic[f"command_box{cl}"])
    #canvas["command_box"].image = img
    print(cl)
    def b():
        grafic[f"command_box{cl}"]=tk.PhotoImage(file=f"assets/images/{cl}_off.png", master=root["command_box"])
        canvas["command_box"].itemconfigure(f"command_box{cl}",image=grafic[f"command_box{cl}"])
        if cl != "chack" or cl != "delet":
            canvas["command_box_Entry"].insert(tk.END,cl)
    root["command_box"].after(200,b) #1,つまり1000msまつってことよ
def window_del(rootPPP,itembox=[]):
    def a():
        global root
        global canvas
        global itembox_item
        
        for x in root[rootPPP].winfo_children():
            for c, d in canvas.items():
                if d==x:
                    
                    if len(canvas[c].winfo_children())!=0:
                        for e in canvas[c].winfo_children():
                            for f,g in canvas.items():
                                if e == g:
                                    canvas[f].destroy()
                                    del canvas[f]
                                    break
                            else:
                                continue
                            break
                    #print(canvas[c].find_all())
                    for h in itembox:
                        
                        del itembox_item[h]
                    canvas[c].destroy()
                    del canvas[c]
                    break
            else:
                continue
            break
        


        root[rootPPP].destroy()
        del root[rootPPP]
        flag[rootPPP]=True
    return a

#root["test"].protocol("WM_DELETE_WINDOW",end)

async def change_yuuten(motono_yuuten:int,motono_kiatu:int,atono_kiatu:int,j_mol:int,m3_mol:int) -> int:
    return (motono_yuuten+((motono_yuuten+273.15)*m3_mol/j_mol)*(atono_kiatu-motono_kiatu)*1000000)

async def hitbox(aaaaaa,bbbb): #if x or yが他のとかぶってたら移動をキャンセル　nextx=x+ax,nexty=y+ay object=(x=nextx,y=nexty)元の奴から座標変える
    #bbbb=[["name",]...]
    #aaaaaa=[x,y,ax,ay,item]
    #ほかに欲しい情報あるなら渡せそうなら渡す。
    pass

async def change_taiseki(cm3:int,g_cm3_moto:int,g_cm3_ato:int):
    return (g_cm3_moto*cm3)/g_cm3_ato

async def serch(zisyo:dict,kuraberu:int,reverse:bool=False):
    return sorted(zisyo.items(), key=lambda x:csvdata[x[0]][kuraberu], reverse=reverse)

async def combined_gas_law(aturyoku_1:float,taiseki_1:float,onndo_1:float,aturyoku_2:float="return",taiseki_2:float="return",onndo_2:float="return"):
    k=(aturyoku_1*taiseki_1)/onndo_1
    if (aturyoku_2=="return")and(taiseki_2!="return")and(onndo_2!="return"):
        return (k*onndo_2)/taiseki_2
    elif (aturyoku_2!="return")and(taiseki_2=="return")and(onndo_2!="return"):
        return (k*onndo_2)/aturyoku_2
    elif (aturyoku_2!="return")and(taiseki_2!="return")and(onndo_2=="return"):
        return (aturyoku_2*taiseki_1)/k
    else:
        raise TypeError("The type to be converted is not specified or multiple types are specified")


async def inventry_update():    #print(await serch({"鉄":2,"アルミニウム":1},2,reverse=True))
    try:
        while True:
            for name,index in inventry.items():
                Pa=index[4]
                _c=index[3]
                melt_y=[]
                yw=0
                melt_yw={}
                for a,b in serch(index[5],3,True):#いったんすらっくに送っておきます
                    yw += b/index[2]
                    melt_y += [[a,b,yw]]
                    melt_yw[a]=[b,yw]
                
                for i in index[0]:
                    if await change_yuuten(csvdata[i[4]][0],csvdata[i[4]][5],Pa,csvdata[i[4]][8],csvdata[i[4]][7]) >= _c:
                        
                        
                        Pa=await combined_gas_law(aturyoku_1=Pa,taiseki_1=index[1]*index[2],onndo_1=_c,taiseki_2=index[1]*index[2]+1,onndo_2=_c)
                        zzzzzz=combined_gas_law(taiseki_1= await change_taiseki(cm3=1,g_cm3_moto=csvdata[i[4]][2],g_cm3_ato=csvdata[i[4]][3]),aturyoku_1=csvdata[i[4]][5],onndo_1=20,aturyoku_2=Pa,onndo_2=_c)
                        inventry[name][5][i[4]] += zzzzzz
                        Pa=await combined_gas_law(aturyoku_1=Pa,taiseki_1=index[1]*index[2]+zzzzzz,onndo_1=_c,taiseki_2=index[1]*index[2],onndo_2=_c)
                    else:
                        await hitbox(aaaaaa=i,bbbb=melt_y)
                        #↓惜しいけど違うんだよな
                        # コッペ => AIさん 「このあたりのコードの概要をコメントに書き連ねて、説明して」
                        # このループでは、inventryの各アイテムについて、溶けるかどうかを判定
                        # もし溶けるならば、hitboxを使用して移動させる
                        # hitboxを使用することで、実際に移動するまでの時間を計算できる
                        # よって、inventryの各アイテムのx座標を、hitboxのx座標に
                        # inventryの各アイテムのy座標を、hitboxのy座標にして、hitboxのx座標、y座標を更新する


                for key,i in index[5].items():
                    if await change_yuuten(csvdata[key][0],csvdata[key][5],Pa,csvdata[key][8],csvdata[key][7]) <= _c:
                        Pa=await combined_gas_law(aturyoku_1=Pa,taiseki_1=index[1]*index[2],onndo_1=_c,taiseki_2=index[1]*index[2]+melt_yw[key][0],onndo_2=_c)
                        xw=combined_gas_law(taiseki_1= await change_taiseki(cm3=melt_yw[key][0],g_cm3_moto=csvdata[key][3],g_cm3_ato=csvdata[key][2]),aturyoku_2=csvdata[key][5],onndo_2=20,aturyoku_1=Pa,onndo_1=_c)
                        xxw=index[1]/xw
                        for v in range(int(xw)):
                            inventry[name][0] += [[xxw*v,melt_yw[key][1],0,0,key]]
                        Pa=await combined_gas_law(aturyoku_1=Pa,taiseki_1=index[1]*index[2]+xw,onndo_1=_c,taiseki_2=index[1]*index[2],onndo_2=_c)
                    elif await change_yuuten(csvdata[key][0],csvdata[key][6],Pa,csvdata[key][9],csvdata[key][7]) >= _c:
                        Pa=await combined_gas_law(aturyoku_1=Pa,taiseki_1=index[1]*index[2],onndo_1=_c,taiseki_2=index[1]*index[2]+melt_yw[key][0],onndo_2=_c)
                        xw=combined_gas_law(taiseki_1= await change_taiseki(cm3=melt_yw[key][0],g_cm3_moto=csvdata[key][3],g_cm3_ato=csvdata[key][4]),aturyoku_2=csvdata[key][6],onndo_2=20,aturyoku_1=Pa,onndo_1=_c)
                        inventry[name][6][key] += xw
                        pass

                inventry[name][4]=Pa
                inventry[name][3]=_c
            await delay(1/120)
    except asyncio.exceptions.CancelledError:
        print("inventry_system:mainloop Cancelling now...")

        



#↓tkinter.mainloopのようなもの
task=asyncio.gather(main(),mainloop_in_async(),inventry_update())#,ConnectUnity())
try:
    asynceventroop=asyncio.get_event_loop()
    asynceventroop.run_until_complete(task)
except asyncio.exceptions.CancelledError:
    print("All Cancell OK")