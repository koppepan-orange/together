import asyncio
import tkinter
x={}
tk={}
bar={}
listbox={}
listvar={}
def focus(locals:dict,title:str)->None:
    x[title]=locals

def debug_loop_update():
    for name,index in x.items():
        contents=[]
        for name2,index2 in index.items():
            contents.append(str(name2)+"_"+str(index2))
        
        if name not in tk:
            tk[name]=tkinter.Tk()
            tk[name].title(str(name))
            listvar[name]=tkinter.StringVar(value=contents)
            tk[name].grid_rowconfigure(0, weight=1)
            tk[name].grid_columnconfigure(0, weight=1)
            listbox[name] = tkinter.Listbox(
                tk[name],
                width=20,
                height=5,
                font=("", 40),
                listvariable=listvar[name],
            )   
            listbox[name].grid(row=0, column=0,sticky=tkinter.NSEW)
            bar[name] = tkinter.Scrollbar(
                tk[name], # 親ウィジェット
                orient=tkinter.VERTICAL, # バーの方向
            )
            bar[name].grid(
                row=0, column=1, # リストボックスの右の位置を指定
                sticky=tkinter.N + tkinter.S # 上下いっぱいに引き伸ばす
            )
            bar[name].config(
                command=listbox[name].yview
            )
            listbox[name].config(
                yscrollcommand=bar[name].set
            )
        else:
            #バグってる、mainの方が空白になります
            #print(contents)
            listvar[name].set(contents)
            listbox[name].grid(row=0, column=0,sticky=tkinter.NSEW)
            #listbox[name].grid(row=0, column=0,sticky=tkinter.NSEW)
            #print(listbox[name]["listvariable"])
        tk[name].update()

async def debug_loop_for_async():
    while True:
        debug_loop_update()
        await asyncio.sleep(1/120)
        
#asyncio.run(debug_loop_for_async())