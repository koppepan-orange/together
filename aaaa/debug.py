import asyncio
import tkinter
def list_selected(e):
    #xyz=tkinter.Toplevel()
    #txt=tkinter.Text(xyz,font=("", 10),state=tkinter.DISABLED)
    #txt.pack(fill="x",expand=True,side = tkinter.TOP)
    #txt.insert('1.0',str(listbox.get(listbox.curselection())))
    #scroll = tkinter.Scrollbar(xyz, orient=tkinter.HORIZONTAL, command=txt.xview)
    #scroll.pack(after=txt, fill="x")
    #txt["yscrollcommand"] = scroll.set
    print(str(listbox.get(listbox.curselection())))
x={}
def focus(locals:dict,title:str)->None:
    x[title]=locals
tk=tkinter.Tk()
tk.title("debug")
listvar=tkinter.StringVar(value=["None"])
tk.grid_rowconfigure(0, weight=1)
tk.grid_columnconfigure(0, weight=1)
listbox = tkinter.Listbox(
    tk,
    width=20,
    height=5,
    font=("", 10),
    listvariable=listvar,
)
listbox.bind('<<ListboxSelect>>', lambda e:list_selected(e))
listbox.grid(row=0, column=0,sticky=tkinter.NSEW)
bar = tkinter.Scrollbar(
    tk, # 親ウィジェット
    orient=tkinter.VERTICAL, # バーの方向
)
bar.grid(
    row=0, column=1, # リストボックスの右の位置を指定
    sticky=tkinter.N + tkinter.S # 上下いっぱいに引き伸ばす
)
bar.config(
    command=listbox.yview
)
listbox.config(
    yscrollcommand=bar.set
)

def debug_loop_update():
    global tk,listvar
    contents=[]
    for name,index in x.items():
        #print(name)
        contents.append("↓"+str(name)+"↓")
        for name2,index2 in index.items():
            contents.append(str(name2)+":"+str(index2))
        contents.append("↑"+str(name)+"↑")
    listvar.set(contents)
    tk.update()

async def debug_loop_for_async():
    while True:
        debug_loop_update()
        await asyncio.sleep(1/120)
#asyncio.run(debug_loop_for_async())