from sub import asyncio,websockets,webbrowser,tk,ttk,Image,ImageTk,math,re,random,csv,copy,os,pickle,debug
import sub

inventry2=[]
paip={}
csvdata={}
cemicaldata=[]
craftdata=[]
kakikae_list=[]
tem={}
imgg={}
sub.boot_now.update()
gui={}
img_mini={}
#Image.MAX_IMAGE_PIXELS = 200000000000



os_listdir=os.listdir("./assets/images/items")
sub.rooding_txt["text"]="ロード中...画像を読み込んでいます"
sub.boot_now.update()
for axzxz in os_listdir:
    try:
        sub.boot_now.update()
        imggg=Image.open(f"./assets/images/items/{axzxz}").convert("RGBA")
        #alpha = imggg.getchannel("A")
        #imggg = imggg.convert("RGB").convert("P", palette=Image.ADAPTIVE, colors=255)
        imgg["assets/images/items/"+str(axzxz)]=imggg
        img_mini[str(axzxz)] = imggg.resize((50, 50))
    except Exception as e:
        print(e)


sub.rooding_txt["text"]="ロード中...アイテムのデータを読み込んでいます"
sub.boot_now.update()
with open('book1.csv',"r",encoding="utf-8_sig", newline='\r\n') as f:
    for fa in csv.reader(f):
        fas=[]
        float_non_fack=True
        coun=0
        for fafad in fa[1:11]:
            try:
                sub.boot_now.update()
                if fafad=="":# and coun!=7:
                    float_non_fack=False
                fas.append(float(fafad))
            except Exception as e:
                #print(e)
                    fas.append(float("inf"))
            coun+=1
        if float_non_fack : tem[fa[0]]=0.0
        csvdata[fa[0]]=fas#+[float(fa[8])/100]+fa[9:]
        csvdata[fa[0]+"のレシピ"]=[float("inf"),float("inf"),float("inf"),float("inf"),float("inf"),101325,101325,133,float("inf"),float("inf")]
        #csvname.append(fa[0])
    
    del csvdata["name"]
    del tem["name"]


sub.rooding_txt["text"]="ロード中...化学変化のデータを読み込んでいます"
sub.boot_now.update()
with open('cemical.csv',"r",encoding="utf-8_sig", newline='\r\n') as f:
    for fa in csv.reader(f):
        sub.boot_now.update()
        #print(fa)
        if fa[0]!="元":
            cemicaldata.append([fa[0].split(";"),fa[1].split(";"),fa[2].split(";"),fa[3].split(";"),fa[4].split(";"),fa[5].split(";")])


sub.rooding_txt["text"]="ロード中...クラフトレシピのデータを読み込んでいます"
sub.boot_now.update()
with open('crafts.csv',"r",encoding="utf-8_sig", newline='') as f:#なんか動かなかったのでnewline変えました
    for fa in csv.reader(f):
        sub.boot_now.update()
        #print(fa)
        res = []
        for a in range(4):
            res.append(fa[a].split("|"))
        res.append(fa[4])
        #craftdata.append([fa[0].split("|"),fa[1].split("|"),fa[2].split("|"),fa[3].split("|"),fa[4]])
        craftdata.append(res)

#print(craftdata)

for a in range(len(cemicaldata)):
    for b in range(len(cemicaldata[a])):
        for c in range(len(cemicaldata[a][b])):
            try:
                sub.boot_now.update()
                cemicaldata[a][b][c]=float(cemicaldata[a][b][c])
            except Exception as e:
                #print(e)
                pass

sub.rooding_txt["text"]="ロード中...その他もろもろを読み込んでいます"
sub.boot_now.update()
#print(cemicaldata)

# print(csvdata)
# 一旦消させてもらいますね

itembox_item={}

root={}
#root["test"]=tk.Tk()
#root["test"].geometry("500x500+10+10")
flag={"red_button":True,"command_box":True,"craft_table":True,"inventry_name":[],"inventry_load":True}
canvas={}
pic_item="item_box"

inventry={} #name:{[[[x,y,ax,ay,item]..],width,hight,℃,Pa,{item:mutch,..}<-melt_item,{item:mutch,..}<-air_item]}


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
        
#def probably(num, code = 0):
#   res = random.uniform(0, 100) <= num
#   if code!=0:
#       sendjs(str(res))
#   return res


def sendjs(text):
    for name in socketname:
        asynceventroop.create_task(name.send(text))

nextIs=""
kontext={}

ock=["",]

async def handler(websocket):
    global root
    global socketname
    global pic_item
    global inventry
    global nextIs
    global ock

    try:
        async for message in websocket:
            sendjs(message)
            if message.startswith('"') and message.endswith('"'):
                message = message[1:-1] # 囧
            
            #if message[:7] != "printTx" or message[:4] == "none":print(f"{message}")
            
            if (len(socketname) >= 2 )and(websocket not in socketname):
                print("cheater's elegant arrive!!!!!!!!!!!")
                #print(socketname)
                await websocket.send("Are you a cheater?")
                await websocket.close()
                continue
            elif websocket not in socketname:
                print("cliant_conect")
                socketname.append(websocket)
            #if websocket not in socketname:
            
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
            elif message[:10]=="item_pick_":
                sendjs('pickしたed')
                x=message[10:].split("_")
                ock = [x[0],x[1]]
            elif message[:9]=="item_ock_":
                sendjs('ockしたed')
                ock = ["",0]
            elif message[:12]=="item_shositu":
                sendjs('shosituしたed')
                ock = ["",0]
            elif message[:5]=="heat_":#f"heat_{name}_{add_heat}"
                x=message[5:].split("_")
                inventry[x[0]][3]+=float(x[1])
            elif message[:10]=="make_paip_":#f"connect_{name}_{tick/cm3}"
                x=message[10:].split("_")
                paip[x[0]]=[float(x[1])]
            elif message[:8]=="connect_":#f"connect_{name}_{add.inventryname}_{y}"
                x=message[8:].split("_")
                paip[x[0]].append([x[1],float(x[2])])
            elif message[:9]=="pressure_":#f"pressure_"
                x=message[9:].split("_")
                inventry[x[0]][4]+=float(x[1])
            elif message[:11]=="input_item_":#f"input_item_{name}_{x}_{y}_{item}"
                x=message[11:].split("_")
                inventry[str(x[0])][0]+=[[float(x[1]),float(x[2]),0,0,x[3]]]
            elif message[:11]=="imput_melt_":#imput_melt_{name}_{item}_{cm3}
                x=message[11:].split("_")
                #inventry[str(x[0])][4]=combined_gas_law(aturyoku_1=inventry[str(x[0])][4],taiseki_1=inventry[str(x[0])][5][x[1]],taiseki_2=inventry[str(x[0])][5][x[1]])
                inventry[str(x[0])][5][x[1]]+= x[2]
            elif message[:10]=="imput_air_":#imput_air_{name}_{item}_{cm3}
                x=message[10:].split("_")
                inventry[str(x[0])][6][x[1]]+=x[2]
            elif message[:16]=="create_inventry_":#f"create_invryentry_{name}_{windth}_{higth}_{onndo}_{aturyoku}_{tainetuMAX}_{taiatu}_{taiatuMIN}_{zokusei}"
                x=message[16:].split("_")
                inventry[x[0]]=[[],float(x[1]),float(x[2]),float(x[3]),float(x[4]),tem.copy(),tem.copy(),float(x[5]),float(x[6]),float(x[7]),str(x[8])]
                inventry[x[0]][6]["酸素"]=float(x[1])*float(x[2])*0.2095
                inventry[x[0]][6]["窒素"]=float(x[1])*float(x[2])*0.7808
            elif message[:14]=="open_inventry_" and message[14:] not in flag["inventry_name"]:#f"open_inventry_{name}"
                await open_inventry(message[14:])
            #elif message[:15]=="save_data_load_":
            #    f = open("./save/"+message[15:]+"txt","rb")
            #    inventry=pickle.load(f)
            #    f.close
            #elif message[:15]=="save_data_save_":
            #    f = open("./save/"+message[15:]+"txt","wb")
            #    pickle.dump(inventry,f)
            #    f.close
            elif message[:8]=="save_js_":#"save_js_{name}_{data}"
                x=message[8:].split("_")
                with open("./save/"+x[0]+".jsdata","w", encoding='utf-8') as f:
                    f.write(x[1])
                #f.close()
                with open("./save/"+x[0]+".pydata", "wb") as file:
                    pickle.dump([inventry,ock], file)
                #f = open("./save/"+x[0]+".pdt","wb")
                #pickle.dumps(inventry,f)
                #f.close
                sendjs("save_Oll_Kollect")
            elif message[:8]=="load_js_":#"load_js_{name}"
                x=message[8:].split("_")
                try:
                    with open("./save/"+x[0]+".jsdata","r", encoding='utf-8') as f:
                        sendjs("load_js_"+f.read())
                    #f.close()
                    with open("./save/"+x[0]+".pydata", "rb") as file:
                        x=pickle.load(file)
                        inventry=x[0]
                        ock=x[1]
                    sendjs("load_Oll_Kollect")
                except Exception as e:
                    sendjs("failed_"+str(e))
                 #f = open("./save/"+x[0]+".pdt","rb")
                 #inventry=pickle.load(f)
                 #f.close
            elif message[:9]=="rem_save_":#"rem_save_{name}"
                try:
                    os.remove(f"./save/{message[9:]}.pydata")
                    os.remove(f"./save/{message[9:]}.jsdata")
                    sendjs("rem_Oll_Kollect")
                except Exception as e:
                    print(f"{e}のためセーブデータの削除に失敗しました。")
                    sendjs("failed_"+str(e))
            elif message[:16]=="get_savedataname":#"get_savedataname"
                getSave=""
                for n in os.listdir("./save"):
                    if n[-4:]==".pydata":
                        getSave+=","+n[:-4]
                sendjs("sendjs_loadlis_"+str(getSave))
            
            elif message[:8]=="printTx,":
                mes=message[8:]
                # print(f"プレッツェル「{mes}」")
                print(mes)
                
            else:
                print(f'コマンド"{message}"は正しく認証されませんでした')
            
            
            #print(message[:5])
            #print("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
            #for s in send:
            #    print("send:"+s)
            #    await websocket.send(str(s))
    except asyncio.exceptions.CancelledError:
        pass
    except websockets.exceptions.ConnectionClosedOK:
        pass
    finally:
        print("今回はハッカーは（たぶん）いませんでした!\nやったね！")
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
    await asyncio.sleep(0.01)
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




def red_button(e):
    global asynceventroop
    #def a():
    sendjs("logadd,「red_button」")
    sendjs("soundPlay,doom")
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
    #sendjs("logadd,pressed")
    val = canvas["command_box_Entry"].get()
    print(f"chack-{val}")
    sendjs(f"入力: {val}")
    canvas["command_box_Entry"].delete(0,tk.END)
    plass_command_box_button("chack")
    

def plass_command_box_button(a):
    cl = str(a)
    # sendjs("logadd,command_box_pressed")
    
    imgData = f"assets/images/{cl}_on.png"
    if cl == "chack" and random.randint(1,100)<=3:
        imgData = f"assets/images/{cl}_on_blue.png"
    
    
    grafic["command_box"+cl]=tk.PhotoImage(file=imgData, master=root["command_box"])
    canvas["command_box"].itemconfigure(f"command_box{cl}",image=grafic[f"command_box{cl}"])
    #canvas["command_box"].image = img
    print(cl)
    def b():
        grafic[f"command_box{cl}"]=tk.PhotoImage(file=f"assets/images/{cl}_off.png", master=root["command_box"])
        canvas["command_box"].itemconfigure(f"command_box{cl}",image=grafic[f"command_box{cl}"])
        if cl != "chack" or cl != "delet":
            canvas["command_box_Entry"].insert(tk.END, cl)
    root["command_box"].after(200,b)
def window_del(rootPPP,itembox=[]):
    def a():
        global root
        global canvas
        global itembox_item
        
        for x in root[rootPPP].winfo_children():
            for c, d in canvas.items():
                if d == x:
                    
                    if len(canvas[c].winfo_children()) != 0:
                        for e in canvas[c].winfo_children():
                            for f, g in canvas.items():
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

async def change_yuuten(motono_yuuten:int,motono_kiatu:int,atono_kiatu:int,j_mol:int,m3_mol:int) -> float:
    #return (motono_yuuten+((motono_yuuten+273.15)*m3_mol/j_mol)*(atono_kiatu-motono_kiatu)*1000000)
    try:
        #print(1/(motono_yuuten+273.15))
        #print((1/((1/(motono_yuuten+273.15))-((8.314*math.log((motono_kiatu/atono_kiatu)))/j_mol)))-273.15)
        return (1/((1/(motono_yuuten+273.15))-((8.314*math.log((motono_kiatu/atono_kiatu)))/j_mol)))-273.15
        #return ((motono_yuuten+273.15)*math.exp(((atono_kiatu-motono_kiatu)*j_mol)/m3_mol))-273.15
    except OverflowError: 
        #print((motono_yuuten,motono_kiatu,atono_kiatu,j_mol,m3_mol))
        return float("inf")
        #return float("inf")
    except ZeroDivisionError:
        return float("inf")
    except ValueError:
        return 0.0
        
#filled = {} # [x= , y= , dens] cmd "cls&start tree /f C:"
num = 0
async def hitbox(ichi, ichiD, dens, name, width, hight): 
    save=ichi
    #ichiD=[["name",]...]　#気体密度,3,3/沸点　　←melt-yがわからん..というか今のところこれ使ってない
    #ichi=[x,y,ax,ay,item]
    #cccc=name,融点 (℃),沸点 (℃),固体密度 (g/cm3) (20℃),液体密度,気体密度,融点気圧(Pa),沸点気圧(Pa),m3/mol,誘拐熱(J/mol),蒸発熱(J/mol),コメント
    #dens= 固体密度
    #print(f"filled1:{filled}")
    global inventry2
    global num
    #now = [ichi[0]//2,ichi[1]//2,dens]
    gox=0
    goy=0
    #if now[0] not in filled or now[1] not in filled:
    if ichi[0]//2 not in filled or ichi[1]//2 not in filled:

        if ichi[2] != 0:
            gox = dens*(ichi[2]**2)*4.8
            ichi[0] += gox
            if ichi[0] == hight:
                    ichi[0] += -(gox)*2

        if ichi[3] != 0:
            goy = ichi[3] + dens*(ichi[3]**2)*4.8
            ichi[1] += goy
            if ichi[1] == width:
                    ichi[1] += -(goy)*2
        #await asyncio.sleep(0.1)

        #now = [ichi[0]//2,ichi[1]//2,dens] #割る値によって当たり判定の大きさ変わる

#ここから移動後
    if ichi[0]//2 not in filled or ichi[1]//2 not in filled:

        #移動と制限
        if ichi[2] != 0:
            gox = dens*(ichi[2]**2)*4.8
            ichi[0] += gox
            if ichi[0] == hight:
                ichi[0] += -(gox)*2
            if ichi[0] > width or ichi[0] < 0:            
                if ichi[0] > width:
                    ichi[0] = width
                    ichi[2] -= ichi[2]*0.9            
                if ichi[0] < 0:
                    ichi[0] = 0
                    ichi[2] -= ichi[2]*0.9
        
        if ichi[3] != 0:
            goy = ichi[3] + dens*(ichi[3]**2)*4.8
            ichi[1] += goy
            if ichi[1] == width:
                ichi[1] += -(goy)*2
            if ichi[1] > hight or ichi[1] < 0:
                if ichi[1] > hight:
                    ichi[1] = hight
                    ichi[3] = 0            
                if ichi[1] < 0:
                    ichi[1] = 0
                    ichi[3] -= ichi[3]*0.9

        #移動後代入
        
        if ichi[0] not in filled or ichi[1] not in filled: #iranasou
            filled[num] = [ichi[0], ichi[1]]
            num += 1

        try:
            inventry2[name][0].remove(save)
            inventry2[name][0].append(ichi)
        except ValueError:
            # 念のため（オブジェクトが見つからない場合）
            # await asyncio.sleep(0.1)
            return

        # inventry2[name][0][idx][0] = ichi[0]
        # inventry2[name][0][idx][1] = ichi[1]
        # inventry2[name][0][idx][2] = ichi[2]
        # inventry2[name][0][idx][3] = ichi[3]

    await asyncio.sleep(0.1)

"""
        if ichi[1] > hight or ichi[1] < 0 :

            if ichi[1] > hight:
                ichi[1] = hight
                ichi[3] = 0
            
            if ichi[1] < 0:
                ichi[1] = 0
                ichi[3] -= ichi[3]*0.9

        if ichi[0] > width or ichi[0] < 0:
            
            if ichi[0]*2 > width:
                ichi[0] = width
                ichi[2] -= ichi[2]*0.9
            
            if ichi[0]*2 < 0:
                ichi[0] = 0
                ichi[2] -= ichi[2]*0.9

        if ichi[0] not in filled or ichi[1] not in filled:#elseを作る

            filled[num] = [ichi[0],ichi[1]] #index[0]の値で埋まってるか判定　エラーのもとだよ！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
            num += 1
        print(ichi)

    await asyncio.sleep(0.1)

        inventry2[name][0][count][0] = ichi[0]
        inventry2[name][0][count][1] = ichi[1]
        inventry2[name][0][count][2] = ichi[2]
        inventry2[name][0][count][3] = ichi[3] 
    

    #print("filled2:" + str(filled))
    """

async def change_taiseki(cm3:float,g_cm3_moto:float,g_cm3_ato:float):
    #print("cm3",cm3,"g/cm3_moto",g_cm3_moto,"g/cm3_ato",g_cm3_ato))
    return (g_cm3_moto*cm3)/g_cm3_ato

def serch(zisyo:dict,kuraberu:int,reverse:bool=False):
    return sorted(zisyo.items(), key=lambda x:csvdata[x[0]][kuraberu], reverse=reverse)

async def combined_gas_law(aturyoku_1:float,taiseki_1:float,onndo_1:float,aturyoku_2:float="return",taiseki_2:float="return",onndo_2:float="return"): # type: ignore
    if onndo_1 <= -273.15:
        raise
        #onndo_1=-273.14
    #    onndo_1=1e-9
    k=(aturyoku_1*taiseki_1)/(onndo_1+273.15)
    
    if (aturyoku_2=="return")and(taiseki_2!="return")and(onndo_2!="return"):
        #print("aturyoku_2",(k*(onndo_2+273.15))/taiseki_2))
        if taiseki_2==0:
            raise
            #taiseki_2 = 1e-90
            #return float("inf")
        return (k*(onndo_2+273.15))/taiseki_2
    elif (aturyoku_2!="return")and(taiseki_2=="return")and(onndo_2!="return"):
        #print("taiseki_2",(k*(onndo_2+273.15))/aturyoku_2))
        if aturyoku_2==0:
            raise
            #aturyoku_2 = 1e-90
            #raise #原因を探ってifで入らないように
            return float("inf")
        return (k*(onndo_2+273.15))/aturyoku_2
    elif (aturyoku_2!="return")and(taiseki_2!="return")and(onndo_2=="return"):
        #print("onndo_2",((aturyoku_2*taiseki_1)/k)-273.15))
        if k==0:
            raise
            #k = 1e-90
            #return float("inf")
        return ((aturyoku_2*taiseki_2)/k)-273.15
    else:
        raise TypeError("The type to be converted is not specified or multiple types air specified")

def inventry_break(name):
    sendjs(name)
    sendjs(str(inventry[name]))
    delete_inventry_GUI(name)
    #del inventry[name]
    del inventry2[name]

filled = {}
async def inventry_update(): #print(await serch({"鉄":2,"アルミニウム":1},2,reverse=True))
    #await asyncio.sleep(0)
    global inventry
    global inventry2
    global filled
    global num
    try:
        while True:
            
            inventry2=copy.deepcopy(inventry)
            for name,index in inventry.items():
                if index[10]=="heat-chinc":
                    inventry2[name][4]=await combined_gas_law(aturyoku_1=inventry2[name][4],taiseki_1=inventry2[name][1]*inventry2[name][2],onndo_1=inventry2[name][3],taiseki_2=inventry2[name][1]*inventry2[name][2],onndo_2=inventry2[name][3]*0.9)
                    sendjs(f"koppepansamadaze!!!!!!!!!!!!!yea!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!burger!!!!!!!!!!kasugai!!!!!!!!!!!!!!!!!!!_{name}_{inventry2[name][3]*0.1}")
                    inventry2[name][3]*=0.9
                #print(inventry2)
                write=False
                if name in flag["inventry_name"]:
                    write=True
                    canvas["inventry_root_"+str(name)].delete('item')
                melt_y=[]
                #echo echo&echo echo2&echo echo3&echo echo4
                yw=0
                byw=0
                melt_yw={}
                breakALL=False
                #print(index[5])
                #print("indexの中身:", index, type(index)) #class<int>だった
                for a,b in serch(index[5],3,True):
                    if b==0:
                        continue
                    byw=yw
                    yw += b/index[2]
                    melt_y += [[a,b,yw]]
                    melt_yw[a]=[b,yw]
                    if yw>index[2]:
                        inventry_break(name)
                        breakALL=True
                        break
                    # 囧: exception => error
                    if write: 
                        if str(name)+"assets/images/items/melt_"+str(a)+".png" in imgg:
                            # print("a")
                            # img[str(name)+"assets/images/items/melt_"+str(a)+".png"]=ImageTk.PhotoImage(imgg["assets/images/items/melt_"+str(a)+".png"].crop((0,0,int(index[1]),min(int(yw-byw),int(index[2])))),master=root["inventry_root_"+str(name)])
                            # print("b")
                            xxxxxxxxxxx=a
                        else:
                            xxxxxxxxxxx="error"
                        img[str(name)+"assets/images/items/melt_"+str(xxxxxxxxxxx)+".png"]=ImageTk.PhotoImage(imgg["assets/images/items/melt_"+str(xxxxxxxxxxx)+".png"].crop((0,0,int(index[1]),min(int(yw-byw),int(index[2])))),master=root["inventry_root_"+str(name)])
                        canvas["inventry_root_"+str(name)].lower(canvas["inventry_root_"+str(name)].create_image(int(index[1]/2),int(index[2]-(min(int(yw-byw),int(index[2]))/2)), image=img[str(name)+"assets/images/items/melt_"+str(xxxxxxxxxxx)+".png"],tag="item"))
                if breakALL:
                    break
                if write:
                    for a,b in index[6].items():
                        if b == 0 or (a not in []):
                            continue
                        air=imgg["assets/images/items/air_"+str(a)+".png"].crop((0,0,index[1],(index[2]-yw)))
                        air.putalpha(int(b/30))
                        #print(air)
                        img[str(name)+"assets/images/items/air_"+str(a)+".png"]=ImageTk.PhotoImage(air,master=root["inventry_root_"+str(name)])
                        airid=canvas["inventry_root_"+str(name)].create_image(int(index[1]/2),int((index[2]-yw)/2), image=img[str(name)+"assets/images/items/air_"+str(a)+".png"],tag="item")
                        canvas["inventry_root_"+str(name)].lift(airid)

                    #canvas["inventry_root_"+str(name)].create_image(0,0, image=img[i[4]])
                count=0
                delet_list=[]
                filled = {} #消す
                num=0
                for i in index[0]:
                    try:
                        _ = i[4]
                    except Exception:
                        continue
                        print(inventry)
                    #囧 print(i)
                    #print(await change_yuuten(csvdata[i[4]][0],csvdata[i[4]][5],inventry2[name][4],csvdata[i[4]][8],csvdata[i[4]][7]))
                    #print(inventry2[name][3])

                    # print(i[4], csvdata[i[4]][0])
                    if await change_yuuten(csvdata[i[4]][0],csvdata[i[4]][5],inventry2[name][4],csvdata[i[4]][8],csvdata[i[4]][7]) <= inventry2[name][3]:
                        #print("chack3")
                        #inventry2[name][4]=await combined_gas_law(aturyoku_1=inventry2[name][4],taiseki_1=index[1]*index[2],onndo_1=inventry2[name][3],taiseki_2=index[1]*index[2]+1,onndo_2=inventry2[name][3])
                        #print("aaaaaaa")
                        zzzzzz=await combined_gas_law(taiseki_1= await change_taiseki(cm3=50,g_cm3_moto=csvdata[i[4]][2],g_cm3_ato=csvdata[i[4]][3]),aturyoku_1=csvdata[i[4]][5],onndo_1=20,aturyoku_2=inventry2[name][4],onndo_2=inventry2[name][3])
                        try:
                            inventry2[name][5][i[4]] += zzzzzz
                            #del inventry2[name][0][count]
                            delet_list.append(i)
                        except KeyError as e:
                            delet_list.append(i)
                            #del inventry2[name][0][count]
                            inventry2[name][5][i[4]] = zzzzzz
                        # inventry2[name][3]+=(50)*100/(csvdata[i[4]][7])*(csvdata[i[4]][8])*4.184*inventry2[name][1]*inventry2[name][2]
                        #print("bbbbbbbb")
                        inventry2[name][3]=await combined_gas_law(aturyoku_1=inventry2[name][4],taiseki_1=index[1]*index[2],onndo_1=inventry2[name][3],aturyoku_2=inventry2[name][4],taiseki_2=index[1]*index[2]+zzzzzz-50.0)
                        #print("cccccccc")
                        inventry2[name][4]=await combined_gas_law(aturyoku_1=inventry2[name][4],taiseki_1=index[1]*index[2],onndo_1=inventry2[name][3],taiseki_2=index[1]*index[2]+zzzzzz-50.0,onndo_2=inventry2[name][3])
                    else:
                        #print("chack4")
                        if write:
                            if str(name)+"assets/images/items/"+str(i[4])+".png" in img:
                                canvas["inventry_root_"+str(name)].create_image(i[0], i[1], image=img[str(name)+"assets/images/items/"+str(i[4])+".png"],tag="item")
                            elif str(i[4])[-3:]=="レシピ":
                                canvas["inventry_root_"+str(name)].create_image(i[0], i[1], image=img[str(name)+"assets/images/items/レシピ.png"],tag="item")
                            else:
                                canvas["inventry_root_"+str(name)].create_image(i[0], i[1], image=img[str(name)+"assets/images/items/error.png"],tag="item")
                            
                        await hitbox(ichi=i,ichiD=melt_y,dens=inventry2[name][3],name=name,width=inventry2[name][1],hight=inventry2[name][2])
                    count+=1
                    #boot.bat
                for xxxxa in delet_list:
                    try:
                        inventry2[name][0].remove(xxxxa)
                    except IndexError as e:
                        print(inventry2)
                        print(xxxxa)
                        print(e)
                for key,i in index[5].items():
                    if i==0:
                        continue
                    #print("725")
                    if await change_yuuten(csvdata[key][0],csvdata[key][5],inventry2[name][4],csvdata[key][8],csvdata[key][7]) > inventry2[name][3] and inventry2[name][5][key]!=0:
                        #print("chack5")
                        #囧 print(await change_yuuten(csvdata[key][0],csvdata[key][5],inventry2[name][4],csvdata[key][8],csvdata[key][7]))
                        #囧 print(inventry2[name][3])
                        #inventry2[name][4]=await combined_gas_law(aturyoku_1=inventry2[name][4],taiseki_1=index[1]*index[2],onndo_1=inventry2[name][3],taiseki_2=index[1]*index[2]+melt_yw[key][0],onndo_2=inventry2[name][3])
                        try:
                            save=melt_yw[key][0]
                        except Exception as e:
                            print(e)
                        #print("dddddddd")
                        xw=await combined_gas_law(taiseki_1= await change_taiseki(cm3=melt_yw[key][0],g_cm3_moto=csvdata[key][3],g_cm3_ato=csvdata[key][2]),aturyoku_2=csvdata[key][5],onndo_2=20,aturyoku_1=inventry2[name][4],onndo_1=inventry2[name][3])
                        #inventry2[name][3]-=(inventry2[name][5][key])*100/(csvdata[key][7])*(csvdata[key][8])*4.184*inventry2[name][1]*inventry2[name][2]
                        #print("eeeeeee")
                        inventry2[name][3] = await combined_gas_law(aturyoku_1=inventry2[name][4],taiseki_1=index[1]*index[2],onndo_1=inventry2[name][3],aturyoku_2=inventry2[name][4],taiseki_2=(index[1]*index[2])-save+xw)
                        if xw==0:xw=1e-90
                        xxw=index[1]/xw
                        inventry2[name][5][key] = 0
                        for v in range(int(xw/50)):
                            inventry2[name][0] += [[xxw*v,melt_yw[key][1],0,0,key]]
                        #print("fffffffff")
                        inventry2[name][4]=await combined_gas_law(aturyoku_1=inventry2[name][4],taiseki_1=index[1]*index[2],onndo_1=inventry2[name][3],taiseki_2=(index[1]*index[2])-save+xw,onndo_2=inventry2[name][3])
                    elif await change_yuuten(csvdata[key][1],csvdata[key][6],inventry2[name][4],csvdata[key][9],csvdata[key][7]) <= inventry2[name][3] and inventry2[name][5][key]!=0:
                        #print("chack6")
                        print("749")
                        #inventry2[name][4]=await combined_gas_law(aturyoku_1=inventry2[name][4],taiseki_1=index[1]*index[2],onndo_1=inventry2[name][3],taiseki_2=index[1]*index[2]+melt_yw[key][0],onndo_2=inventry2[name][3])
                        save=inventry2[name][5][key]
                        #print(save)
                        #print((await change_taiseki(cm3=inventry2[name][5][key],g_cm3_moto=csvdata[key][3],g_cm3_ato=csvdata[key][4]),"taiseki"))
                        #print("ggggggggg")
                        xw=await combined_gas_law(taiseki_1= await change_taiseki(cm3=inventry2[name][5][key],g_cm3_moto=csvdata[key][3],g_cm3_ato=csvdata[key][4]),aturyoku_2=csvdata[key][6],onndo_2=20,aturyoku_1=inventry2[name][4],onndo_1=inventry2[name][3])
                        try:
                            inventry2[name][6][key] += xw
                        except Exception as en:
                            print(f"=> {en}")
                            inventry2[name][6][key] = xw
                        #inventry2[name][3]+=(inventry2[name][5][key])*100/(csvdata[key][7])*(csvdata[key][9])*4.184*inventry2[name][1]*inventry2[name][2]
                        #print("hhhhhhhhh")
                        if inventry2[name][4]!=0:
                            inventry2[name][3]=await combined_gas_law(aturyoku_1=inventry2[name][4],taiseki_1=index[1]*index[2],onndo_1=inventry2[name][3],aturyoku_2=inventry2[name][4],taiseki_2=index[1]*index[2]-save+xw)
                        inventry2[name][5][key] = 0
                        #print("iiiiiiiii")
                        inventry2[name][4]=await combined_gas_law(aturyoku_1=inventry2[name][4],taiseki_1=index[1]*index[2],onndo_1=inventry2[name][3],taiseki_2=index[1]*index[2]-save+xw,onndo_2=inventry2[name][3])

                #print("769")
                for key,i in index[6].items():
                    if await change_yuuten(csvdata[key][1],csvdata[key][6],inventry2[name][4],csvdata[key][9],csvdata[key][7]) > inventry2[name][3] and inventry2[name][6][key]!=0:
                        #print("chack7")
                        #inventry2[name][4]=await combined_gas_law(aturyoku_1=inventry2[name][4],taiseki_1=index[1]*index[2],onndo_1=inventry2[name][3],taiseki_2=index[1]*index[2]+melt_yw[key][0],onndo_2=inventry2[name][3])
                        try:
                            save=inventry2[name][6][key]
                        except KeyError:
                            save=0
                        print(f"{inventry2[name][4]}jjjjjjjjj")
                        xw=await combined_gas_law(taiseki_1= await change_taiseki(cm3=inventry2[name][6][key],g_cm3_moto=csvdata[key][4],g_cm3_ato=csvdata[key][3]),aturyoku_2=csvdata[key][6],onndo_2=20,aturyoku_1=inventry2[name][4],onndo_1=inventry2[name][3])
                        inventry2[name][5][key] += xw 
                        #inventry2[name][3]-=(inventry2[name][6][key])*100/(csvdata[key][7])*(csvdata[key][9])*4.184*inventry2[name][1]*inventry2[name][2]
                        #print("kkkkkkkkk")
                        inventry2[name][3]=await combined_gas_law(aturyoku_1=inventry2[name][4],taiseki_1=index[1]*index[2],onndo_1=inventry2[name][3],aturyoku_2=inventry2[name][4],taiseki_2=(index[1]*index[2])-save+xw)
                        inventry2[name][6][key] = 0
                        #print("lllllllll")
                        inventry2[name][4]=await combined_gas_law(aturyoku_1=inventry2[name][4],taiseki_1=index[1]*index[2],onndo_1=inventry2[name][3],taiseki_2=(index[1]*index[2])-save+xw,onndo_2=inventry2[name][3])
                #print("787")
                for cem in cemicaldata:
                    for aa in range(len(cem[2])):
                        dicta={"℃+":[3,True],"Pa+":[4,True]}
                        if not ((inventry2[name][dicta[cem[2][aa]][0]] >= cem[3][aa])) and (dicta[cem[2][aa]][1]):
                            break
                        elif not(inventry2[name][dicta[cem[2][aa]][0]] <= cem[3][aa]) and not(dicta[cem[2][aa]][1]):
                            break

                    else:
                        #print("797")
                        #print(cem[0])
                        for aaa in range(len(cem[0])):
                            if (inventry2[name][6][cem[0][aaa]] >= cem[1][aaa]*csvdata[cem[0][aaa]][7]/1000000):#気体
                                pass
                                #print("c")
                            elif (inventry2[name][5][cem[0][aaa]] >= cem[1][aaa]*csvdata[cem[0][aaa]][7]/1000000):#液体
                                pass
                                #print("d")
                            else:
                                popop=0
                                for x in inventry[name][0]:
                                    if x[4] == cem[0][aaa]:
                                        popop+=1
                                if not(popop >= cem[1][aaa]*csvdata[cem[0][aaa]][7]/1000000):
                                    #print("e")
                                    break
                        else:
                            flag["cem_roop"]={"are":float("inf"),"melt":float("inf"),"aaaa":0,"mmmm":0}
                            
                            #print("815")
                            #print(f"{inventry2[name][4]}f")
                            for aaa in range(len(cem[0])):
                                flag["cem_roop"]["cell"+str(aaa)]=[]
                                if inventry2[name][6][cem[0][aaa]] >= cem[1][aaa]*csvdata[cem[0][aaa]][7]/1000000:#気体
                                    #if flag["cem_roop"]["are"]>(cem[1][aaa]*csvdata[cem[0][aaa]][7]/1000000/inventry2[name][6][cem[0][aaa]]):
                                    #flag["cem_roop"][f"aaaa{aaa}"]=(cem[1][aaa]*csvdata[cem[0][aaa]][7]/1000000)
                                    #print("aaaaaaasasasaasssssssssss")
                                    flag["cem_roop"]["are"]= min((inventry2[name][6][cem[0][aaa]]/(cem[1][aaa]*csvdata[cem[0][aaa]][7]/1000000)),flag["cem_roop"]["are"])
                                    
                                    #print("g")
                                    continue
                                elif inventry2[name][5][cem[0][aaa]] >= cem[1][aaa]*csvdata[cem[0][aaa]][7]/1000000:#液体
                                    #if flag["cem_roop"]["are"]>(cem[1][aaa]*csvdata[cem[0][aaa]][7]/1000000/inventry2[name][5][cem[0][aaa]]):
                                    #    flag["cem_roop"]["aaaa"]=inventry2[name][5][cem[0][aaa]]
                                    #flag["cem_roop"][f"mmmm{aaa}"]=(cem[1][aaa]*csvdata[cem[0][aaa]][7]/1000000)
                                    flag["cem_roop"]["melt"]= min((inventry2[name][5][cem[0][aaa]]/(cem[1][aaa]*csvdata[cem[0][aaa]][7]/1000000)),flag["cem_roop"]["melt"])
                                    #if flag["cem_roop"]["are"]==(cem[1][aaa]*csvdata[cem[0][aaa]][7]/1000000/inventry2[name][5][cem[0][aaa]]):
                                    #    flag["cem_roop"]["mmmm"]=inventry2[name][5][cem[0][aaa]]
                                    #print(f"{inventry2[name][4]}h")
                                    continue
                                else:
                                    #print("826")
                                    popop=int(cem[1][aaa]*csvdata[cem[0][aaa]][7]/1000000)
                                    ap=len(inventry2[name][0])
                                    for x in range(ap):
                                        try:
                                            if inventry2[name][0][x][4] == cem[0][aaa]:
                                                popop-=50
                                                flag["cem_roop"]["cell"+str(aaa)].append(x)
                                            if popop <=0:
                                                break
                                        except Exception as e:
                                            print(f"Exceptionやで!!! {e}")
                                            pass
                            #print(flag["cem_roop"])
                            if flag["cem_roop"]["are"]==float("inf"):
                                flag["cem_roop"]["are"]=0
                            
                            if flag["cem_roop"]["melt"]==float("inf"):
                                flag["cem_roop"]["melt"]=0
                            for aaa in range(len(cem[0])):
                                inventry2[name][6][cem[0][aaa]]-=flag["cem_roop"]["aaaa"]*(cem[1][aaa]*csvdata[cem[0][aaa]][7]/1000000)
                                inventry2[name][5][cem[0][aaa]]-=flag["cem_roop"]["mmmm"]*(cem[1][aaa]*csvdata[cem[0][aaa]][7]/1000000)
                            ssssssss=0
                            while True:
                                vs=0
                                for aaa in range(len(cem[0])):
                                    vs=min(len(flag["cem_roop"]["cell"+str(aaa)]),vs)
                                if vs<1:
                                    break
                                for aaa in range(len(cem[0])):
                                    del inventry2[name][0][flag["cem_roop"]["cell"+str(aaa)][0]]
                                ssssssss+=1
                            #print(ssssssss+flag["cem_roop"]["are"]+flag["cem_roop"]["melt"])
                            #for vvvvv in range(ssssssss+flag["cem_roop"]["are"]+flag["cem_roop"]["melt"]):
                            for aaaa in range(len(cem[4])):
                                if cem[4][aaaa]=="cal":
                                    inventry2[name][3] += cem[5][aaaa]*inventry2[name][2]*inventry2[name][1]*(ssssssss+flag["cem_roop"]["are"]+flag["cem_roop"]["melt"])
                                else:
                                    inventry2[name][5][cem[4][aaaa]] += (cem[5][aaaa]*csvdata[cem[4][aaaa]][7]/1000000)*(ssssssss+flag["cem_roop"]["are"]+flag["cem_roop"]["melt"])
                            #print("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")

                if  write:
                    canvas["inventry_root_"+str(name)].delete("pressuregauge")
                    canvas["inventry_root_"+str(name)].delete("thermometer")
                    if inventry2[name][3]<0 and not(inventry2[name][9]==0):
                        cclemon=16-abs(15*inventry2[name][3]/inventry2[name][9])
                        
                        coloer="#241CED"
                        #print((coloer,cclemon))
                        canvas["inventry_root_"+str(name)].itemconfigure("thermometer_outline",image=img[str(name)+"thermometer_blue"])
                    elif inventry2[name][3]>0 and not(inventry2[name][7]==0):
                        cclemon=16-abs(15*inventry2[name][3]/inventry2[name][7])
                        coloer="#ED1C24"
                        canvas["inventry_root_"+str(name)].itemconfigure("thermometer_outline",image=img[str(name)+"thermometer"])
                    else:
                        coloer="#969696"
                        cclemon=0
                        canvas["inventry_root_"+str(name)].itemconfigure("thermometer_outline",image=img[str(name)+"thermometer_gray"])
                    

                    canvas["inventry_root_"+str(name)].create_line(13, 13, 13+(8*math.cos(math.radians(90-(-(300/inventry2[name][8])*inventry2[name][4])+30))),  13+(8*math.sin(math.radians(90-(-(300/inventry2[name][8])*inventry2[name][4])+30))),tag=("system","pressuregauge"),arrow=tk.FIRST,arrowshape=(8, 2, 1),fill = "#000000")
                    canvas["inventry_root_"+str(name)].create_line(39, 16,39,cclemon,tag=("system","thermometer"),fill = coloer,width=1)
                    #print(90-((360/inventry2[name][8])*inventry2[name][4])-10)
                    canvas["inventry_root_"+str(name)].lift("system")
                    canvas["inventry_root_"+str(name)].lift("have")
                    
                if (index[3]>index[7])or(index[3]<index[9])or(index[4]>index[8]):inventry_break(name)
            inventry=copy.deepcopy(inventry2)

            #print("876")
            
            for indexb in paip.values():#from ppaa to aapp
                ppaa=None
                aapp=None
                mins=float("inf")
                maxs=0
                for index_id in range(1,len(indexb)):
                    
                    if maxs<inventry[indexb[index_id][0]][4] and inventry[indexb[index_id][0]][4]-maxs>10:
                        maxs=inventry[indexb[index_id][0]][4]
                        ppaa=index_id
                    if mins>inventry[indexb[index_id][0]][4] and mins-inventry[indexb[index_id][0]][4]>10:
                        mins=inventry[indexb[index_id][0]][4]
                        aapp=index_id
                if ppaa==None or aapp==None or maxs==mins:
                    continue
                #print([indexb[ppaa][0]+" to "+indexb[aapp][0],inventry[indexb[ppaa][0]][4]-inventry[indexb[aapp][0]][4]])
                melt_type=None
                are_type=None
                yw=0
                for a,b in serch(inventry[indexb[ppaa][0]][5],3,True):
                    if b==0:
                        continue
                    byw=yw
                    yw += b/inventry[indexb[ppaa][0]][2]
                    if indexb[ppaa][1]<yw:
                        melt_type=a
                ppap=yw
                for a,b in serch(inventry[indexb[ppaa][0]][6],3,True):
                    if b==0:
                        continue
                    byw=yw
                    yw += b/(inventry[indexb[ppaa][0]][2]-ppap)
                    if indexb[ppaa][1]<yw:
                        are_type=a
                    #melt_y += [[a,b,yw]]
                    #melt_yw[a]=[b,yw]
                
                if melt_type!=None:
                    
                    
                    move = min(inventry[indexb[ppaa][0]][5][melt_type],indexb[0])
                    #print("melt")
                    #print(move)
                    if move<0:
                        raise
                    inventry[indexb[ppaa][0]][5][melt_type]-=move
                    inventry[indexb[aapp][0]][5][melt_type]+=move
                    inventry[indexb[ppaa][0]][4]-=move
                    inventry[indexb[aapp][0]][4]+=move
                    """
                    becouse=inventry[indexb[ppaa][0]][1]*inventry[indexb[ppaa][0]][2]
                    app=inventry[indexb[aapp][0]][1]*inventry[indexb[aapp][0]][2]
                    change_app_cm3=await combined_gas_law(aturyoku_1=inventry[indexb[ppaa][0]][4],aturyoku_2=inventry[indexb[aapp][0]][4],onndo_1=inventry[indexb[ppaa][0]][3],onndo_2=inventry[indexb[aapp][0]][3],taiseki_1=move)
                    change_app_pa=await combined_gas_law(aturyoku_1=inventry[indexb[aapp][0]][4],onndo_1=inventry[indexb[aapp][0]][3],onndo_2=inventry[indexb[aapp][0]][3],taiseki_1=inventry[indexb[aapp][0]][5][melt_type],taiseki_2=move+inventry[indexb[aapp][0]][5][melt_type])
                    change_app_do=await combined_gas_law(aturyoku_1=inventry[indexb[aapp][0]][4],aturyoku_2=inventry[indexb[aapp][0]][4],onndo_1=inventry[indexb[aapp][0]][3],taiseki_1=inventry[indexb[aapp][0]][5][melt_type],taiseki_2=move+inventry[indexb[aapp][0]][5][melt_type])
                    #becouse_app_cm3=combined_gas_law(aturyoku_1=inventry[indexb[ppaa][0]][4],aturyoku_2=inventry[indexb[aapp][0]][4],onndo_1=inventry[indexb[ppaa][0]][3],onndo_2=inventry[indexb[aapp][0]][3],taiseki_1=move)
                    becouse_app_pa=await combined_gas_law(aturyoku_1=inventry[indexb[ppaa][0]][4],onndo_1=inventry[indexb[ppaa][0]][3],onndo_2=inventry[indexb[ppaa][0]][3],taiseki_2=becouse-move,taiseki_1=becouse)
                    becouse_app_do=await combined_gas_law(aturyoku_1=inventry[indexb[ppaa][0]][4],aturyoku_2=inventry[indexb[ppaa][0]][4],onndo_1=inventry[indexb[ppaa][0]][3],taiseki_2=becouse-move,taiseki_1=becouse)
                    print(change_app_cm3)
                    inventry[indexb[ppaa][0]][5][melt_type]-=move
                    inventry[indexb[aapp][0]][5][melt_type]+=change_app_cm3
                    inventry[indexb[aapp][0]][4]=change_app_pa
                    inventry[indexb[aapp][0]][3]=change_app_do
                    inventry[indexb[ppaa][0]][4]=becouse_app_pa
                    inventry[indexb[ppaa][0]][3]=becouse_app_do
                    """
                elif are_type!=None:
                    move = min(inventry[indexb[ppaa][0]][6][are_type],indexb[0])
                    #print("are")
                    #print(move)
                    if move<0:
                        raise
                    #print("")
                    inventry[indexb[ppaa][0]][6][are_type]-=move
                    inventry[indexb[aapp][0]][6][are_type]+=move
                    inventry[indexb[ppaa][0]][4]-=move
                    inventry[indexb[aapp][0]][4]+=move
                    """
                    becouse=inventry[indexb[ppaa][0]][1]*inventry[indexb[ppaa][0]][2]
                    app=inventry[indexb[aapp][0]][1]*inventry[indexb[aapp][0]][2]
                    change_app_cm3=await combined_gas_law(aturyoku_1=inventry[indexb[ppaa][0]][4],aturyoku_2=inventry[indexb[aapp][0]][4],onndo_1=inventry[indexb[ppaa][0]][3],onndo_2=inventry[indexb[aapp][0]][3],taiseki_1=move)
                    change_app_pa=await combined_gas_law(aturyoku_1=inventry[indexb[aapp][0]][4],onndo_1=inventry[indexb[aapp][0]][3],onndo_2=inventry[indexb[aapp][0]][3],taiseki_1=inventry[indexb[aapp][0]][6][are_type],taiseki_2=move+inventry[indexb[aapp][0]][6][are_type])
                    change_app_do=await combined_gas_law(aturyoku_1=inventry[indexb[aapp][0]][4],aturyoku_2=inventry[indexb[aapp][0]][4],onndo_1=inventry[indexb[aapp][0]][3],taiseki_1=inventry[indexb[aapp][0]][6][are_type],taiseki_2=move+inventry[indexb[aapp][0]][6][are_type])
                    #becouse_app_cm3=combined_gas_law(aturyoku_1=inventry[indexb[ppaa][0]][4],aturyoku_2=inventry[indexb[aapp][0]][4],onndo_1=inventry[indexb[ppaa][0]][3],onndo_2=inventry[indexb[aapp][0]][3],taiseki_1=move)
                    becouse_app_pa=await combined_gas_law(aturyoku_1=inventry[indexb[ppaa][0]][4],onndo_1=inventry[indexb[ppaa][0]][3],onndo_2=inventry[indexb[ppaa][0]][3],taiseki_2=becouse-move,taiseki_1=becouse)
                    becouse_app_do=await combined_gas_law(aturyoku_1=inventry[indexb[ppaa][0]][4],aturyoku_2=inventry[indexb[ppaa][0]][4],onndo_1=inventry[indexb[ppaa][0]][3],taiseki_2=becouse-move,taiseki_1=becouse)
                    print(change_app_cm3)
                    inventry[indexb[ppaa][0]][6][are_type]-=move
                    inventry[indexb[aapp][0]][6][are_type]+=change_app_cm3
                    inventry[indexb[aapp][0]][4]=change_app_pa
                    inventry[indexb[aapp][0]][3]=change_app_do
                    inventry[indexb[ppaa][0]][4]=becouse_app_pa
                    inventry[indexb[ppaa][0]][3]=becouse_app_do
                    """
            #input("")
            await asyncio.sleep(1/120)
    except asyncio.exceptions.CancelledError:
        print("inventry_system:mainloop Cancelling now...")
    #except Exception as e:
    #    print(e)
    #    print(inventry)
    #    await inventry_update()


def motion(e,name):
    global ock
    global img
    #print("move")
    if ock[0]!="":
        #print(img[str(name)+"assets/images/items/"+str(ock[0])+".png"])
        canvas["inventry_root_"+str(name)].delete('have')
        if str(name)+"assets/images/items/"+str(ock[0])+".png" in img:
            canvas["inventry_root_"+str(name)].create_image(e.x,e.y, image=img[str(name)+"assets/images/items/"+str(ock[0])+".png"],tag="have")
        elif str(ock[0])[-4:]=="のレシピ":
            canvas["inventry_root_"+str(name)].create_image(e.x,e.y, image=img[str(name)+"assets/images/items/レシピ.png"],tag="have")
        else:
            canvas["inventry_root_"+str(name)].create_image(e.x,e.y, image=img[str(name)+"assets/images/items/error.png"],tag="have")
    else:
        canvas["inventry_root_"+str(name)].delete('have')

async def W_W(key,index,name,e):
    xw=await combined_gas_law(taiseki_1=20,aturyoku_2=csvdata[key][5],onndo_2=20,aturyoku_1=inventry2[name][4],onndo_1=inventry2[name][3])
    #inventry2[name][3]-=(inventry2[name][5][key])*100/(csvdata[key][7])*(csvdata[key][8])*4.184*inventry2[name][1]*inventry2[name][2]
    #print("eeeeeee")
    inventry2[name][3] =await combined_gas_law(aturyoku_1=inventry2[name][4],taiseki_1=index[1]*index[2],onndo_1=inventry2[name][3],aturyoku_2=inventry2[name][4],taiseki_2=(index[1]*index[2])+xw)
    inventry[name][0]+=[[e.x,e.y,0,0,ock[0]]]
    #print("fffffffff")
    inventry2[name][4]=await combined_gas_law(aturyoku_1=inventry2[name][4],taiseki_1=index[1]*index[2],onndo_1=inventry2[name][3],taiseki_2=(index[1]*index[2])+xw,onndo_2=inventry2[name][3])


def click(e,name):
    global ock
    if ock[0]!="":
        sendjs("helasu")
        asynceventroop.create_task(W_W(ock[0],["",inventry[name][1],inventry[name][2]],name,e))
        #print("dddddddd")
        #x=asyncio.run(change_taiseki(cm3=20,g_cm3_moto=csvdata[key][3],g_cm3_ato=csvdata[key][2]))
        
    elif ock[0]=="":
        cccc=""
        for a in range(len(inventry[name][0])):
            if abs(inventry[name][0][a][0]-e.x)<=25 and abs(inventry[name][0][a][1]-e.y)<=25:
                cccc=a
                break
        if cccc != "":
            #print(inventry[name][0][cccc][4]) #これ実行したときのどの文章？
            sendjs(f"item,pick,{inventry[name][0][cccc][4]},1")
            del inventry[name][0][cccc]
    motion(e,name)

#def click2(e,name):
#    global ock
#    if ock[0]=="":
#        cccc=""
#        for a in range(len(inventry[name][0])):
#            if abs(inventry[name][0][a][0]-e.x)<=25 and abs(inventry[name][0][a][1]-e.y)<=25:
#                cccc=a
#                break
#        if cccc != "":
#            print(inventry[name][0][cccc][4]) #これ実行したときのどの文章？
#            sendjs(f"item,pick,{inventry[name][0][cccc][4]},1")
#            del inventry[name][0][cccc]

def delete_inventry_GUI(name):
    window_del("inventry_root_"+str(name))()
    #print(canvas)
    #print(root)
    #print(motion_data)
    try:
        flag["inventry_name"].remove(name)
    except Exception as e:
        print(e)

    cclemonn=gui.copy()
    for axx,sute in cclemonn.items():
        if axx[-len(name):]==name:
            del gui[axx]
    try:
        window_del("inventry_Toplevel_pressuregauge"+str(name))()
        window_del("inventry_Toplevel_thermometer"+str(name))()
    except Exception as e:
        print(e)
    a=[]
    try:
        flag["inventry_name"].remove(name)
    except ValueError:
        pass
    for name2,index in img.items():
        if str(name)+"assets/images/items/"==name2[:20+len(str(name))]:
            a.append(name2)
    for ax in a:
        del img[ax]

##def inventry_GUI_update(name):
#    canvas["inventry_root_"+str(name)].delete('all')
#    for inventry[name]

def pressuregauge(e,name):
    try:
        root["inventry_Toplevel_pressuregauge"+str(name)].focus_set()
    except:
        root["inventry_Toplevel_pressuregauge"+str(name)]=tk.Toplevel(root["inventry_root_"+str(name)])
        root["inventry_Toplevel_pressuregauge"+str(name)].title(str(name)+"の気圧計")
        #img[str(name)+"pressuregauge"]=tk.PhotoImage(file = "./assets/images/systems/pressuregauge_mid.png",master=root["inventry_Toplevel_pressuregauge"+str(name)])
        root["inventry_Toplevel_pressuregauge"+str(name)].geometry(f"300x300+100+100")
        root["inventry_Toplevel_pressuregauge"+str(name)].attributes("-toolwindow",True)
        root["inventry_Toplevel_pressuregauge"+str(name)].attributes("-topmost", True)
        root["inventry_Toplevel_pressuregauge"+str(name)].resizable(False, False)
        root["inventry_Toplevel_pressuregauge"+str(name)].focus_set()
        img[str(name)+"pressuregauge_mid"]=tk.PhotoImage(file = "./assets/images/systems/pressuregauge_mid.png",master=root["inventry_Toplevel_pressuregauge"+str(name)])
        canvas["inventry_Toplevel_pressuregauge"+str(name)] = tk.Canvas(master=root["inventry_Toplevel_pressuregauge"+str(name)],bg = "white", width = 300,height = 300)
        canvas["inventry_Toplevel_pressuregauge"+str(name)].place(x = 0,y = 0)
        gui["inventry_Toplevel_pressuregauge_gui"+str(name)]=canvas["inventry_Toplevel_pressuregauge"+str(name)].create_image(100,100, image=img[str(name)+"pressuregauge_mid"],tag="system")
        gui["inventry_Toplevel_pressuregauge_gui_label"+str(name)]= ttk.Label(root["inventry_Toplevel_pressuregauge"+str(name)], text=str(inventry[name][4]),font=("MSゴシック", "20", "bold"),foreground="#ff0000")
        gui["inventry_Toplevel_pressuregauge_gui_label"+str(name)].place(x=150, y=200)
        root["inventry_Toplevel_pressuregauge"+str(name)].after(1,pressuregauge_move,name)

def pressuregauge_move(name):
    try:
        gui["inventry_Toplevel_pressuregauge_gui_label"+str(name)].config(text=str(inventry[name][4]))
        if 1000>inventry[name][4]:
            gui["inventry_Toplevel_pressuregauge_gui_label"+str(name)].config(foreground="#3498eb")
            gui["inventry_Toplevel_pressuregauge_gui_label"+str(name)].place(x=150+random.randint(-int(5-(inventry[name][4])/200),int(5-(inventry[name][4])/200)), y=200+random.randint(int(-(5-(inventry[name][4])/200)),(5-int((inventry[name][4])/200))))
        elif 1000>inventry[name][8]-inventry[name][4]:
            gui["inventry_Toplevel_pressuregauge_gui_label"+str(name)].config(foreground="#ff0000")
            gui["inventry_Toplevel_pressuregauge_gui_label"+str(name)].place(x=150+random.randint(-int(5-(inventry[name][8]-inventry[name][4])/200),int(5-(inventry[name][8]-inventry[name][4])/200)), y=200+random.randint(-int(5-(inventry[name][8]-inventry[name][4])/200),(5-int((inventry[name][8]-inventry[name][4])/200))))
        else:
            gui["inventry_Toplevel_pressuregauge_gui_label"+str(name)].config(foreground="#0cad00")
            gui["inventry_Toplevel_pressuregauge_gui_label"+str(name)].place(x=150, y=200)
        
        canvas["inventry_Toplevel_pressuregauge"+str(name)].delete("pressuregauge_mid")
        gui["inventry_Toplevel_pressuregauge_gui_move"+str(name)]=canvas["inventry_Toplevel_pressuregauge"+str(name)].create_line(100, 100, 100+(80*math.cos(math.radians(90-(-(330/inventry2[name][8])*inventry2[name][4])+15))),  100+(80*math.sin(math.radians(90-(-(330/inventry2[name][8])*inventry2[name][4])+15))),tag=("system","pressuregauge_mid"),arrow=tk.FIRST,arrowshape=(100, 2, 1),fill = "#000000")
        root["inventry_Toplevel_pressuregauge"+str(name)].after(10,pressuregauge_move,name)
    except Exception as e:
        print(e)
        raise
        return
    


def thermometer(e,name):
    try:
        root["inventry_Toplevel_thermometer"+str(name)].focus_set()
    except:
        root["inventry_Toplevel_thermometer"+str(name)]=tk.Toplevel(root["inventry_root_"+str(name)])
        root["inventry_Toplevel_thermometer"+str(name)].title(str(name)+"の温度計")
        #img[str(name)+"thermometer"]=tk.PhotoImage(file = "./assets/images/systems/thermometer_mid.png",master=root["inventry_Toplevel_thermometer"+str(name)])
        root["inventry_Toplevel_thermometer"+str(name)].geometry(f"300x300+100+100")
        root["inventry_Toplevel_thermometer"+str(name)].attributes("-toolwindow",True)
        root["inventry_Toplevel_thermometer"+str(name)].attributes("-topmost", True)
        root["inventry_Toplevel_thermometer"+str(name)].resizable(False, False)
        root["inventry_Toplevel_thermometer"+str(name)].focus_set()
        img[str(name)+"thermometer_mid"]=tk.PhotoImage(file = "./assets/images/systems/thermometer_mid.png",master=root["inventry_Toplevel_thermometer"+str(name)])
        canvas["inventry_Toplevel_thermometer"+str(name)] = tk.Canvas(master=root["inventry_Toplevel_thermometer"+str(name)],bg = "white", width = 300,height = 300)
        canvas["inventry_Toplevel_thermometer"+str(name)].place(x = 0,y = 0)
        gui["inventry_Toplevel_thermometer_gui"+str(name)]=canvas["inventry_Toplevel_thermometer"+str(name)].create_image(100,100, image=img[str(name)+"thermometer_mid"],tag="system")
        #canvas["inventry_Toplevel_thermometer"+str(name)].place(x = 0,y = 0)
        gui["inventry_Toplevel_thermometer_gui_label"+str(name)]= ttk.Label(root["inventry_Toplevel_thermometer"+str(name)], text=str(inventry[name][3]),font=("MSゴシック", "20", "bold"),foreground="#ff0000")
        gui["inventry_Toplevel_thermometer_gui_label"+str(name)].place(x=150, y=200)
        root["inventry_Toplevel_thermometer"+str(name)].after(1,thermometer_move,name)

def thermometer_move(name):
    try:
        gui["inventry_Toplevel_thermometer_gui_label"+str(name)].config(text=str(inventry[name][3]))
        if 100>inventry[name][3]-inventry[name][9]:
            gui["inventry_Toplevel_thermometer_gui_label"+str(name)].config(foreground="#3498eb")
            gui["inventry_Toplevel_thermometer_gui_label"+str(name)].place(x=150+random.randint(-int(((5-(inventry[name][3]-inventry[name][9])/20))),(5-int(((inventry[name][3]-inventry[name][9])/20)))), y=200+random.randint(-int(((5-(inventry[name][3]-inventry[name][9])/20))),(5-int(((inventry[name][3]-inventry[name][9])/20)))))
        elif 100>inventry[name][7]-inventry[name][3]:
            gui["inventry_Toplevel_thermometer_gui_label"+str(name)].config(foreground="#ff0000")
            gui["inventry_Toplevel_thermometer_gui_label"+str(name)].place(x=150+random.randint(-int(((5-(inventry[name][7]-inventry[name][3])/20))),(5-int(((inventry[name][7]-inventry[name][3])/20)))), y=200+random.randint(-int(((5-(inventry[name][7]-inventry[name][3])/20))),(5-int(((inventry[name][7]-inventry[name][3])/20)))))
        else:
            gui["inventry_Toplevel_thermometer_gui_label"+str(name)].config(foreground="#0cad00")
            gui["inventry_Toplevel_thermometer_gui_label"+str(name)].place(x=150, y=200)

        canvas["inventry_Toplevel_thermometer"+str(name)].delete("thermometer_mid")
        gui["inventry_Toplevel_thermometer_gui_move"+str(name)]=canvas["inventry_Toplevel_thermometer"+str(name)].create_line(100, 142, 100,  100-((133/(inventry2[name][7]-inventry2[name][9]))*(inventry2[name][3]-inventry2[name][9]))+42,tag=("system","thermometer_mid"),fill = "#eb4034",width=16)
        #print(100+((133/(inventry2[name][7]-inventry2[name][9]))*(inventry2[name][9]-inventry2[name][3]))+42)
        root["inventry_Toplevel_thermometer"+str(name)].after(10,thermometer_move,name)
    except Exception as e:
        print(e)
        return
    
def craft_button(e,name):
    for a in craftdata:
        have={}
        #print("push")
        for b in range(len(inventry[name][0])):
            if inventry[name][0][b][4] == a[2][0]+"のレシピ":
                break #囧:画像を出すときは最後の文字が"のレシピ"ならば、「レシピ」って画像を表示するって感じに よろ   
        else:
            continue
        for n in range(len(a[0])):#条件
            have[n]=[]
            fl=True
            for b in range(len(inventry[name][0])):
                #print(inventry[name][0][b][4]+a[0][n])
                if inventry[name][0][b][4] == a[0][n]:
                    fl=False
                    have[n].append(b)
            if fl:
                #print("だめでした")
                #else通らない
                break
        else:
            n=float("inf")#結果
            for names in have.keys():
                n=min(int(a[1][names])*len(have[names]),n)
            for aa in range(n):
                for pp in range(len(a[0])):
                    del inventry[name][0][have[pp][0]]
                for pp in range(len(a[2])):
                    #print(a[3][pp])
                    for x in range(int(a[3][pp])):
                        inventry[name][0].append([root["inventry_root_"+str(name)].winfo_width()/2,0,0,0,a[2][pp]])
        
    debug.focus(locals(),"craft_button")


def out(e,name):
    canvas["inventry_root_"+str(name)].delete('have')


async def open_inventry(name:str):
    global img
    global imgg
    try:
        await asyncio.sleep(0)
        #print((name,type(name)))
        root["inventry_root_"+str(name)]=tk.Tk()
        for axzxz in os_listdir:
            try:
                img[str(name)+"assets/images/items/"+str(axzxz)]=ImageTk.PhotoImage(img_mini[axzxz],master=root["inventry_root_"+str(name)])
            except Exception as e:
                print(e)
        root["inventry_root_"+str(name)].geometry(f"{str(int(inventry[name][1]))}x{str(int(inventry[name][2]))}+100+100")
        root["inventry_root_"+str(name)].attributes("-toolwindow",True)
        root["inventry_root_"+str(name)].attributes("-topmost", True)
        root["inventry_root_"+str(name)].resizable(False, False)
        root["inventry_root_"+str(name)].title(str(name))
        canvas["inventry_root_"+str(name)] = tk.Canvas(master=root["inventry_root_"+str(name)],bg = "white", width = inventry[name][1],height = inventry[name][2])
        canvas["inventry_root_"+str(name)].place(x = 0,y = 0)
        img[str(name)+"pressuregauge"]=tk.PhotoImage(file = "./assets/images/systems/pressuregauge.png",master=root["inventry_root_"+str(name)])
        img[str(name)+"thermometer"]=tk.PhotoImage(file = "./assets/images/systems/thermometer.png",master=root["inventry_root_"+str(name)])
        img[str(name)+"thermometer_blue"]=tk.PhotoImage(file = "./assets/images/systems/thermometer_blue.png",master=root["inventry_root_"+str(name)])
        img[str(name)+"thermometer_gray"]=tk.PhotoImage(file = "./assets/images/systems/thermometer_gray.png",master=root["inventry_root_"+str(name)])
        gui["inventry_pressuregauge_gui"+str(name)]=canvas["inventry_root_"+str(name)].create_image(13,13, image=img[str(name)+"pressuregauge"],tag="system")
        gui["inventry_thermometer_gui"+str(name)]=canvas["inventry_root_"+str(name)].create_image(39,13, image=img[str(name)+"thermometer"],tag=("system","thermometer_outline"))
        canvas["inventry_root_"+str(name)].tag_bind(gui["inventry_pressuregauge_gui"+str(name)],"<ButtonPress-1>",lambda e,name=name:pressuregauge(e,name))
        canvas["inventry_root_"+str(name)].tag_bind(gui["inventry_thermometer_gui"+str(name)],"<ButtonPress-1>",lambda e,name=name:thermometer(e,name))
        if inventry[name][10]=="craft-table":
            img[str(name)+"craft_button"]=tk.PhotoImage(file = "./assets/images/systems/craft_button.png",master=root["inventry_root_"+str(name)])
            gui["inventry_craft_button_gui"+str(name)]=canvas["inventry_root_"+str(name)].create_image(65,13, image=img[str(name)+"craft_button"],tag=("system","craft_button_outline"))
            canvas["inventry_root_"+str(name)].tag_bind(gui["inventry_craft_button_gui"+str(name)],"<ButtonPress-1>",lambda e,name=name:craft_button(e,name))
        root["inventry_root_"+str(name)].bind("<Leave>",lambda e,name=name:out(e,name))
        root["inventry_root_"+str(name)].bind("<Motion>",lambda e,name=name:motion(e,name))
        root["inventry_root_"+str(name)].bind("<ButtonRelease-1>",lambda e,name=name:click(e,name))
        #root["inventry_root_"+str(name)].bind("<ButtonPress-1>",lambda e,name=name:click2(e,name))
        root["inventry_root_"+str(name)].protocol("WM_DELETE_WINDOW",lambda name=name:delete_inventry_GUI(name))
        flag["inventry_name"]+=[str(name)]
        #print(root)
        #root["inventry_root_"+str(name)].after(1,inventry_GUI_update,name)
    except asyncio.exceptions.CancelledError:
        print("inventry_system:GUIsystem Cancelling now...")





debug.focus(globals(),"main_globals")
sub.boot_now.update()
sub.boot_now.destroy()
print("load_OK")

#↓tkinter.mainloopのようなもの
task=asyncio.gather(main(),mainloop_in_async(),inventry_update(),debug.debug_loop_for_async())#,ConnectUnity())
try:
    asynceventroop=asyncio.get_event_loop()
    asynceventroop.run_until_complete(task)
except asyncio.exceptions.CancelledError:
    print("All Cancell OK")

