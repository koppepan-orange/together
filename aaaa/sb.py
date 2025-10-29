import asyncio
import websockets
import webbrowser
import tkinter as tk
import tkinter.ttk as ttk
from PIL import Image, ImageTk
import math
import re
import random
import csv
import copy
import os
import pickle

r={}

async def uppppppp():
    while True:
        #print(r)
        for n,a in r.items():
            a.update()
            await asyncio.sleep(0.05)
            

def endrolemovey(root:tk.Tk):
    x=root.geometry()
    x=x.split("+")
    nx=str(int(x[2])+2)
    root.geometry(x[0]+"+"+x[1]+"+"+nx)
    #print(x[0])
    if int(nx)>root.winfo_screenheight():
        root.destroy()
    else:
        root.after(5,endrolemovey,root)

def boot_endrole():
    global t
    t=asyncio.get_event_loop()
    task=asyncio.gather(endrole(),uppppppp())
    t.run_until_complete(task)

async def endrole():
    karioki=[]
    r[0]=tk.Tk()
    r[0].configure(bg="#e0eeff")
    r[0].geometry(f"410x100+"+str(int(r[0].winfo_screenwidth()/3)-205)+"+-100")
    r[0].overrideredirect(True)
    r[0].attributes("-toolwindow",True)
    r[0].attributes("-topmost", True)
    r[0].resizable(False, False)
    
    #a832a6
    karioki.append(ttk.Label(r[0], text="pythonコードの記入(main)", font=("ＭＳ ゴシック", 15,"bold"), padding=[10], relief=tk.RIDGE,background="#f6fac3",foreground="#544f01").place(x=50,y=10))
    karioki.append(ttk.Label(r[0], text="竹延久志", font=("ＭＳ ゴシック", 15,"bold"), padding=[10], relief=tk.RIDGE,background="#baa0b9",foreground="#4a1549").place(x=50,y=55))
    r[0].protocol("WM_DELETE_WINDOW",lambda:1==1)
    
    
    
    
    r[1]=tk.Tk()
    r[1].configure(bg="#e0eeff")
    r[1].geometry(f"410x100+"+str(int(r[0].winfo_screenwidth()/3*2)-205)+"+-100")
    r[1].overrideredirect(True)
    r[1].attributes("-toolwindow",True)
    r[1].attributes("-topmost", True)
    r[1].resizable(False, False)
    
    #32a84c
    karioki.append(ttk.Label(r[1], text="pythonコードの記入(物理演算)", font=("ＭＳ ゴシック", 15,"bold"), padding=[10], relief=tk.RIDGE,background="#f6fac3",foreground="#544f01").place(x=50,y=10))
    karioki.append(ttk.Label(r[1], text="山形虎太郎", font=("ＭＳ ゴシック", 15,"bold"), padding=[10], relief=tk.RIDGE,background="#a0baa1",foreground="#164a15").place(x=50,y=55))
    r[1].protocol("WM_DELETE_WINDOW",lambda:1==1)
    #r[1].after(10,endrolemovey,r[1])
    #r[0].after(10,endrolemovey,r[0])



    r[2]=tk.Tk()
    r[2].configure(bg="#e0eeff")
    r[2].geometry(f"410x510+"+str(int(r[0].winfo_screenwidth()/2)-205)+"+-780")
    r[2].overrideredirect(True)
    r[2].attributes("-toolwindow",True)
    r[2].attributes("-topmost", True)
    r[2].resizable(False, False)
    karioki.append(ttk.Label(r[2], text="使用させていただいたライブラリ", font=("ＭＳ ゴシック", 15,"bold"), padding=[10], relief=tk.RIDGE,background="#f6fac3",foreground="#544f01").place(x=50,y=10))
    karioki.append(ttk.Label(r[2], text="pillow", font=("ＭＳ ゴシック", 10,"bold"), padding=[5], relief=tk.RIDGE,background="#63a7ff",foreground="#1f334d").place(x=50,y=55))
    karioki.append(ttk.Label(r[2], text="websockets", font=("ＭＳ ゴシック", 10,"bold"), padding=[5], relief=tk.RIDGE,background="#63a7ff",foreground="#1f334d").place(x=50,y=85))
    karioki.append(ttk.Label(r[2], text="以下標準ライブラリ", font=("ＭＳ ゴシック", 15,"bold"), padding=[5], relief=tk.RIDGE,background="#f6fac3",foreground="#544f01").place(x=50,y=125))
    karioki.append(ttk.Label(r[2], text="math", font=("ＭＳ ゴシック", 10,"bold"), padding=[5], relief=tk.RIDGE,background="#63a7ff",foreground="#1f334d").place(x=50,y=160))
    karioki.append(ttk.Label(r[2], text="re", font=("ＭＳ ゴシック", 10,"bold"), padding=[5], relief=tk.RIDGE,background="#63a7ff",foreground="#1f334d").place(x=50,y=190))
    karioki.append(ttk.Label(r[2], text="random", font=("ＭＳ ゴシック", 10,"bold"), padding=[5], relief=tk.RIDGE,background="#63a7ff",foreground="#1f334d").place(x=50,y=220))
    karioki.append(ttk.Label(r[2], text="csv", font=("ＭＳ ゴシック", 10,"bold"), padding=[5], relief=tk.RIDGE,background="#63a7ff",foreground="#1f334d").place(x=50,y=250))
    karioki.append(ttk.Label(r[2], text="copy", font=("ＭＳ ゴシック", 10,"bold"), padding=[5], relief=tk.RIDGE,background="#63a7ff",foreground="#1f334d").place(x=50,y=280))
    karioki.append(ttk.Label(r[2], text="os", font=("ＭＳ ゴシック", 10,"bold"), padding=[5], relief=tk.RIDGE,background="#63a7ff",foreground="#1f334d").place(x=50,y=310))
    karioki.append(ttk.Label(r[2], text="pickle", font=("ＭＳ ゴシック", 10,"bold"), padding=[5], relief=tk.RIDGE,background="#63a7ff",foreground="#1f334d").place(x=50,y=340))
    karioki.append(ttk.Label(r[2], text="tkinter", font=("ＭＳ ゴシック", 10,"bold"), padding=[5], relief=tk.RIDGE,background="#63a7ff",foreground="#1f334d").place(x=50,y=370))
    karioki.append(ttk.Label(r[2], text="tkinter.ttk", font=("ＭＳ ゴシック", 10,"bold"), padding=[5], relief=tk.RIDGE,background="#63a7ff",foreground="#1f334d").place(x=50,y=400))
    karioki.append(ttk.Label(r[2], text="asyncio", font=("ＭＳ ゴシック", 10,"bold"), padding=[5], relief=tk.RIDGE,background="#63a7ff",foreground="#1f334d").place(x=50,y=430))
    karioki.append(ttk.Label(r[2], text="webbrowser", font=("ＭＳ ゴシック", 10,"bold"), padding=[5], relief=tk.RIDGE,background="#63a7ff",foreground="#1f334d").place(x=50,y=460))
    r[2].protocol("WM_DELETE_WINDOW",lambda:1==1)
    
    
    
    r[1].after(10,endrolemovey,r[1])
    r[0].after(10,endrolemovey,r[0])
    r[2].after(2000,endrolemovey,r[2])
#boot_endrole()

