import asyncio
import websockets
import webbrowser
import tkinter as tk
from PIL import Image, ImageTk
import re
import random
import csv
import copy
import os
from asyncio import sleep as delay

"""import socket
import os"""

csvdata={}
cemicaldata=[]
kakikae_list=[]
motion_data={}
#csvname = []

with open('book1.csv',"r",encoding="utf-8_sig", newline='\r\n') as f:
    for fa in csv.reader(f):
        fas=[]
        for fafad in fa[1:]:
            try:
                fas.append(float(fafad))
            except Exception as e:
                #print(e)
                    fas.append(fafad)
        csvdata[fa[0]]=fas#+[float(fa[8])/100]+fa[9:]
        #csvname.append(fa[0])
    del csvdata["name"]

with open('cemical.csv',"r",encoding="utf-8_sig", newline='\r\n') as f:
    for fa in csv.reader(f):
            if fa[0]!="元":
                cemicaldata.append([fa[0].split(";")]+[fa[1].split(";")]+[fa[2].split(";")]+[fa[3].split(";")]+[fa[4].split(";")]+[fa[5].split(";")])



# print(csvdata)
# 一旦消させてもらいますね

itembox_item={}

root={}
#root["test"]=tk.Tk()
#root["test"].geometry("500x500+10+10")
flag={"red_button":True,"command_box":True,"craft_table":True,"inventry_name":[],"inventry_load":True}
canvas={}
pic_item="item_box"

inventry={} #name:{[[[x,y,ax,ay,item]..],width,hight,℃,Pa,{item:mutch,..}<-melt_item,{item:mutch,..}<-are_item]}


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

nextIs=""

ock=["",]

async def handler(websocket):
    global rootw
    global socketname
    global pic_item
    global inventry
    global nextIs
    global ock

    try:
        async for message in websocket:
            
            if message[:7] != "printTx" or message[:4] == "none":print(f"{message}")
            
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
            elif message[:10]=="item_pick_":
                x=message[10:].split("_")
                ock=[x[0],x[1]]
            elif message[:11]=="input_item_":#f"imput_item_{name}_{x}_{y}_{item}"
                x=message[11:].split("_")
                inventry[str(x[0])][0]+=[[float(x[1]),float(x[2]),0,0,x[3]]]
            elif message[:11]=="imput_melt_":#imput_melt_{name}_{item}_{cm3}
                x=message[11:].split("_")
                inventry[str(x[0])][5][x[1]]+=x[2]
            elif message[:10]=="imput_are_":#imput_melt_{name}_{item}_{cm3}
                x=message[10:].split("_")
                inventry[str(x[0])][6][x[1]]+=x[2]
            elif message[:16]=="create_inventry_":#f"create_invryentry_{name}_{windth}_{higth}_{onndo}_{aturyoku}"
                x=message[16:].split("_")
                inventry[x[0]]=[[],x[1],float(x[2]),float(x[3]),float(x[4]),{},{}]
            elif message[:14]=="open_inventry_":#f"open_inventry_{name}"
                await open_inventry(message[14:])

            #囧
            elif message[:8]=="printTx,":
                print(message[8:])
            
            elif message[:6]=="print,":
                print(eval(message[6:]))
                
            elif message[:3]=="次は、" and message[-2:]=="です":
                print("次は？") # 次は、${nextIS}です
                nextIs = message[3:-2]
            #囧

            elif message[:4]=="none":
                pass

            
            else:
                await websocket.send("your kotoba is very gomi!!")
            
            
            #print(message[:5])
            #print("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
            #for s in send:
            #    print("send:"+s)
            #    await websocket.send(str(s))
    except asyncio.exceptions.CancelledError:
        pass
"""
objectseses = {
    name:[
        [
            [],
            [],
        ],
        int,
        int,
        int,
        int,
        {},
        {}
    ]
}
"""
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
    root["command_box"].after(200,b)
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

indens = [] #バック内のitemのdensリスト
filld = {}# key=x 値=y
async def hitbox(aaaaaa,bbbb,dens,width,hight,name): 
    nom=0
    gravity = False
    indens.append(dens)
    #bbbb=[["name",]...]　#気体密度,3,3/沸点　　←melt-yが何か調べる
    #aaaaaa=[[x,y,ax,ay,item]..],width,hight,℃,Pa,{item:mutch,..}<-melt_item,{item:mutch,..}<-are_item
    #cccc=name,融点 (℃),沸点 (℃),固体密度 (g/cm3) (20℃),液体密度,気体密度,融点気圧(Pa),沸点気圧(Pa),m3/mol,誘拐熱(J/mol),蒸発熱(J/mol),コメント
    #dens= 固体密度     itemの座標は中心で書かれている
    #問題点：　他のと接触判定がない。→５pxずつ分けて　ｘの番号とｙの番号がおんなじになったとこはいけないようにする　移動範囲を指定してないので画面外まで動く。

    for i in indens:#下の物との密度計算して落ちるか決める
        if dens >= i:
            gravity = True
            pass
        pass

    #if gravity == True:                #これだと一番重いやつしか動かん
    if aaaaaa[3] >= 0:
            a = dens*(aaaaaa[3]**2)
            aaaaaa[1] += -(a)
    if aaaaaa[2] >= 0:
            a= dens*(aaaaaa[2]**2)
            aaaaaa[0] += -(a) 
    filld[nom] =[aaaaaa[0],aaaaaa[1]] #5で割ったりして５ｐｘごとに区切る
    nom += 1

async def change_taiseki(cm3:int,g_cm3_moto:int,g_cm3_ato:int):
    return (g_cm3_moto*cm3)/g_cm3_ato

def serch(zisyo:dict,kuraberu:int,reverse:bool=False):
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

async def inventry_update(): #print(await serch({"鉄":2,"アルミニウム":1},2,reverse=True))
    global inventry
    try:
        while True:
            inventry2=copy.deepcopy(inventry) #囧_err: inventryっていう変数は存在しないぜ　済
            for name,index in inventry.items():
                write=False
                if name in flag["inventry_name"]:
                    write=True
                    canvas["inventry_root_"+str(name)].delete('all')
                melt_y=[]
                yw=0
                melt_yw={}
                #print("indexの中身:", index, type(index)) #class<int>だった
                for a,b in serch(index[5],3,True):
                    #←ここのindex[5]にてエラー発生。TypeError: 'int' object is not subscriptable　とのこと
                    # 勝手に変えるのは悪いかなと思いちょっと戻したが、いろいろと探究edしたのでそれを乗せときます
                    # index[5], index[2]をindex, indexにした後「serchはasyncやろ？ほなawait使わな」と。
                    # 仕方がないのでserchくんにawaitを付与。すると「line423、zisyo.items()ゆうてますけどzisyoはintですぜ？」と。
                    # こっからはわかんなかったのであとは託しますわね それと、このメモは5年後に爆発します
                    yw += b/index[2]
                    melt_y += [[a,b,yw]] 
                    melt_yw[a]=[b,yw]
                    if write:
                        for k in range(int((index[1]-yw)/50),int((index[1]-(yw-(b/index[2]))))/50):
                            for kk in range(int(index[2]/50)):
                                canvas["inventry_root_"+str(name)].create_image(kk*50,k*50, image=img["assets/images/items/melt_"+str(a)+".png"])
                for a,b in index[6]:
                    for k in range(int(yw/50)):
                        for kk in range(int(index[2]/50)):

                            areid=canvas["inventry_root_"+str(name)].create_image(kk*50,k*50, image=img["assets/images/items/are_"+str(a)+".png"])
                            canvas["inventry_root_"+str(name)].lower(areid)

                        #canvas["inventry_root_"+str(name)].create_image(0,0, image=img[i[4]])
                
                for i in index[0]:
                    #print((i,type(i),inventry2[name]))
                    if await change_yuuten(csvdata[i[4]][0],csvdata[i[4]][5],inventry2[name][4],csvdata[i[4]][8],csvdata[i[4]][7]) >= inventry2[name][3]:
                        
                        
                        #inventry2[name][4]=await combined_gas_law(aturyoku_1=inventry2[name][4],taiseki_1=index[1]*index[2],onndo_1=inventry2[name][3],taiseki_2=index[1]*index[2]+1,onndo_2=inventry2[name][3])
                        zzzzzz=combined_gas_law(taiseki_1= await change_taiseki(cm3=50,g_cm3_moto=csvdata[i[4]][2],g_cm3_ato=csvdata[i[4]][3]),aturyoku_1=csvdata[i[4]][5],onndo_1=20,aturyoku_2=inventry2[name][4],onndo_2=inventry2[name][3])
                        inventry2[name][5][i.pop(4)] += zzzzzz
                        inventry2[name][3]+=(50)*100/(csvdata[i[4]][7])*(csvdata[i[4]][8])*4.184*inventry2[name][1]*inventry2[name][2]
                        inventry2[name][4]=await combined_gas_law(aturyoku_1=inventry2[name][4],taiseki_1=index[1]*index[2],onndo_1=inventry2[name][3],taiseki_2=index[1]*index[2]+zzzzzz-50,onndo_2=inventry2[name][3])
                    else:
                        if write:
                            canvas["inventry_root_"+str(name)].create_image(i[0], i[1], image=img["assets/images/items/"+str(i[4])+".png"])
                        await hitbox(aaaaaa=i,bbbb=melt_y,dens=inventry2[name][3],width=inventry2[name][1],hight=inventry2[name][2],name=name)
                        #↓惜しいけど違うんだよな
                        # コッペ => AIさん 「このあたりのコードの概要をコメントに書き連ねて、説明して」
                        # このループでは、inventryの各アイテムについて、溶けるかどうかを判定
                        # もし溶けるならば、hitboxを使用して移動させる
                        # hitboxを使用することで、実際に移動するまでの時間を計算できる
                        # よって、inventryの各アイテムのx座標を、hitboxのx座標に
                        # inventryの各アイテムのy座標を、hitboxのy座標にして、hitboxのx座標、y座標を更新する


                for key,i in index[5].items():
                    if await change_yuuten(csvdata[key][0],csvdata[key][5],inventry2[name][4],csvdata[key][8],csvdata[key][7]) <= inventry2[name][3]:
                        #inventry2[name][4]=await combined_gas_law(aturyoku_1=inventry2[name][4],taiseki_1=index[1]*index[2],onndo_1=inventry2[name][3],taiseki_2=index[1]*index[2]+melt_yw[key][0],onndo_2=inventry2[name][3])
                        save=melt_yw[key][0]
                        xw=combined_gas_law(taiseki_1= await change_taiseki(cm3=melt_yw[key][0],g_cm3_moto=csvdata[key][3],g_cm3_ato=csvdata[key][2]),aturyoku_2=csvdata[key][5],onndo_2=20,aturyoku_1=inventry2[name][4],onndo_1=inventry2[name][3])
                        inventry2[name][3]-=(inventry2[name][5][key])*100/(csvdata[key][7])*(csvdata[key][8])*4.184*inventry2[name][1]*inventry2[name][2]
                        xxw=index[1]/xw
                        inventry2[name][5][key] = 0
                        for v in range(int(xw/50)):
                            inventry2[name][0] += [[xxw*v,melt_yw[key][1],0,0,key]]
                        inventry2[name][4]=await combined_gas_law(aturyoku_1=inventry2[name][4],taiseki_1=index[1]*index[2],onndo_1=inventry2[name][3],taiseki_2=(index[1]*index[2])-save+xw,onndo_2=inventry2[name][3])
                    elif await change_yuuten(csvdata[key][1],csvdata[key][6],inventry2[name][4],csvdata[key][9],csvdata[key][7]) >= inventry2[name][3]:
                        #inventry2[name][4]=await combined_gas_law(aturyoku_1=inventry2[name][4],taiseki_1=index[1]*index[2],onndo_1=inventry2[name][3],taiseki_2=index[1]*index[2]+melt_yw[key][0],onndo_2=inventry2[name][3])
                        save=melt_yw[key][0]
                        xw=combined_gas_law(taiseki_1= await change_taiseki(cm3=melt_yw[key][0],g_cm3_moto=csvdata[key][3],g_cm3_ato=csvdata[key][4]),aturyoku_2=csvdata[key][6],onndo_2=20,aturyoku_1=inventry2[name][4],onndo_1=inventry2[name][3])
                        inventry2[name][6][key] += xw
                        inventry2[name][3]+=(inventry2[name][5][key])*100/(csvdata[key][7])*(csvdata[key][9])*4.184*inventry2[name][1]*inventry2[name][2]
                        inventry2[name][5][key] = 0
                        inventry2[name][4]=await combined_gas_law(aturyoku_1=inventry2[name][4],taiseki_1=index[1]*index[2],onndo_1=inventry2[name][3],taiseki_2=index[1]*index[2]-save+xw,onndo_2=inventry2[name][3])

                
                for key,i in index[5].items():
                    if await change_yuuten(csvdata[key][1],csvdata[key][6],inventry2[name][4],csvdata[key][9],csvdata[key][7]) <= inventry2[name][3]:
                        #inventry2[name][4]=await combined_gas_law(aturyoku_1=inventry2[name][4],taiseki_1=index[1]*index[2],onndo_1=inventry2[name][3],taiseki_2=index[1]*index[2]+melt_yw[key][0],onndo_2=inventry2[name][3])
                        save=inventry2[name][6][key]
                        xw=combined_gas_law(taiseki_1= await change_taiseki(cm3=inventry2[name][6][key],g_cm3_moto=csvdata[key][4],g_cm3_ato=csvdata[key][3]),aturyoku_2=csvdata[key][6],onndo_2=20,aturyoku_1=inventry2[name][4],onndo_1=inventry2[name][3])
                        inventry2[name][5][key] += xw 
                        inventry2[name][3]-=(inventry2[name][6][key])*100/(csvdata[key][7])*(csvdata[key][9])*4.184*inventry2[name][1]*inventry2[name][2]
                        inventry2[name][6][key] = 0
                        inventry2[name][4]=await combined_gas_law(aturyoku_1=inventry2[name][4],taiseki_1=index[1]*index[2],onndo_1=inventry2[name][3],taiseki_2=(index[1]*index[2])-save+xw,onndo_2=inventry2[name][3])
                
                for cem in cemicaldata:
                    for aa in range(len(cem[2])):
                        dicta={"℃+":[3,1]}
                        if not (inventry2[name][dicta[cem[2][aa]][0]] >= dicta[cem[2][aa]][1]*cem[3][aa]):
                            break
                    else:
                        for aaa in range(len(cem[0])):
                            if not(inventry2[name][6][cem[0][aaa]] >= cem[1][aaa]*csvdata[cem[0][aaa]][7]/1000000):#気体
                                break
                            elif not(inventry2[name][5][cem[0][aaa]] >= cem[1][aaa]*csvdata[cem[0][aaa]][7]/1000000):#液体
                                break
                            else:
                                popop=0
                                for x in inventry[name][0]:
                                    if x[4] == cem[0][aaa]:
                                        popop+=1
                                if not(popop >= cem[1][aaa]*csvdata[cem[0][aaa]][7]/1000000):
                                    break
                        else:
                            for aaa in range(len(cem[0])):
                                if inventry2[name][6][cem[0][aaa]] >= cem[1][aaa]*csvdata[cem[0][aaa]][7]/1000000:#気体
                                    inventry2[name][6][cem[0][aaa]] -= cem[1][aaa]*csvdata[cem[0][aaa]][7]/1000000
                                    continue
                                elif inventry2[name][5][cem[0][aaa]] >= cem[1][aaa]*csvdata[cem[0][aaa]][7]/1000000:#液体
                                    inventry2[name][5][cem[0][aaa]] -= cem[1][aaa]*csvdata[cem[0][aaa]][7]/1000000
                                    continue
                                else:
                                    popop=int(cem[1][aaa]*csvdata[cem[0][aaa]][7]/1000000)
                                    ap=len(inventry2[name][0])
                                    for x in range(ap):
                                        try:
                                            if inventry2[name][0][x][4] == cem[0][aaa]:
                                                popop-=50
                                                del inventry2[name][0][x]
                                            if popop <=0:
                                                break
                                        except Exception as e:
                                            print(f"Exception !!! {e}")
                                            pass
                            
                            for aaaa in range(len(cem[4])):
                                if cem[4][aaaa]=="cal":
                                    inventry2[name][3] += cem[5][aaaa]*inventry2[name][2]*inventry2[name][1]
                                else:
                                    inventry2[name][5][cem[4][aaaa]] += cem[5][aaa]*csvdata[cem[4][aaa]][7]/1000000
                            

            inventry=copy.deepcopy(inventry2)


            await delay(1/120)


    except asyncio.exceptions.CancelledError:
        print("inventry_system:mainloop Cancelling now...")


def motion(e,name):
    motion_data["inventry_root_"+str(name)]=e

def click(e,name):
    global ock
    if ock[0]=="":
        pass
    else:
        sendData("helasu")
        inventry[name][0]+=[[e.x,e.y,0,0,ock[0]]]

def delete_inventry_GUI(name):
    window_del("inventry_root_"+str(name))()
    #print(canvas)
    #print(root)
    #print(motion_data)
    flag["inventry_name"].remove(name)
    del motion_data["inventry_root_"+str(name)]

#def inventry_GUI_update(name):
#    canvas["inventry_root_"+str(name)].delete('all')
#    for inventry[name]

async def aaaaaaaaaaaaa():
    for axzxz in os.listdir("./assets/images/items"):
        try:
            imggg=Image.open(f"./assets/images/items/{axzxz}")
            imggg = imggg.resize((50, 50))
            img["assets/images/items/"+str(axzxz)]=ImageTk.PhotoImage(imggg)
        except Exception as e:
            print(e)
            pass

async def open_inventry(name:str):
    try:
        await delay(0)
        #print((name,type(name)))
        root["inventry_root_"+str(name)]=tk.Tk()
        if flag["inventry_load"]:
            flag["inventry_load"]=False
            await aaaaaaaaaaaaa()
        root["inventry_root_"+str(name)].geometry(f"{str(int(inventry[name][1]))}x{str(int(inventry[name][2]))}+100+100")
        root["inventry_root_"+str(name)].attributes("-toolwindow",True)
        root["inventry_root_"+str(name)].attributes("-topmost", True)
        root["inventry_root_"+str(name)].resizable(False, False)
        canvas["inventry_root_"+str(name)] = tk.Canvas(master=root["inventry_root_"+str(name)],bg = "white", width = inventry[name][1],height = inventry[name][2])
        canvas["inventry_root_"+str(name)].place(x = 0,y = 0)
        root["inventry_root_"+str(name)].bind("<Motion>",lambda e,name=name:motion(e,name))
        root["inventry_root_"+str(name)].bind("<ButtonRelease-1>",lambda e,name=name:click(e,name))
        root["inventry_root_"+str(name)].bind("<ButtonPress-1>",lambda e,name=name:click(e,name))
        root["inventry_root_"+str(name)].protocol("WM_DELETE_WINDOW",lambda name=name:delete_inventry_GUI(name))
        flag["inventry_name"]=[str(name)]
        #print(root)
        #root["inventry_root_"+str(name)].after(1,inventry_GUI_update,name)
    except asyncio.exceptions.CancelledError:
        print("inventry_system:GUIsystem Cancelling now...")



#↓tkinter.mainloopのようなもの
task=asyncio.gather(main(),mainloop_in_async(),inventry_update())#,ConnectUnity())
try:
    asynceventroop=asyncio.get_event_loop()
    asynceventroop.run_until_complete(task)
except asyncio.exceptions.CancelledError:
    print("All Cancell OK")