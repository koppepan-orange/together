import tkinter as tk
x=100
y=100
size = 400
root=tk.Tk()
root.geometry("2000x2000+0+0")
root.attributes("-toolwindow",True)
root.attributes("-topmost", True) #囧 mostopにしてぇ～～～～
root.resizable(False, False)
root2=tk.Toplevel(root)

def a(e):
    root.focus_force()
    global x
    global y
    x -= (int(size/2) - e.x)
    y -= (int(size/2) - e.y)
    root.geometry(f"{size}x{size}+{x}+{y}")

def b(e):
    root.focus_force()

def c(e):
    global root2
    #print("leave")
    #root.focus_force()
    root2=tk.Toplevel(root)
    root2.focus_force()
    root.geometry(f"{root.winfo_screenwidth()}x{root.winfo_screenheight()}+{0}+{0}")
    root2.attributes("-topmost", True)
    root2.geometry(f"{200}x{200}+{root.winfo_screenwidth()-100}+{-100}")

def d(e):
    global root2
    root2.destroy()
    global flag
    flag=False
    global x
    global y
    x=int(e.x - (size/2))
    y=int(e.y - (size/2))
    root.geometry(f"{size}x{size}+{int(x)}+{int(y)}")
    root.attributes("-topmost", True)
    root.focus_force()

def ffff():
    
    try:
        root2.focus_force()
    except Exception:
        root.focus()
        root.focus_force()
    root.after(1,ffff)

root.after(1,ffff)
root.bind("<KeyPress>",b)
root.bind("<Motion>",a)
root.bind("<Leave>",c)
root.bind("<Enter>",d)


root.mainloop()