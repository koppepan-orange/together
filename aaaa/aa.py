import tkinter as tk
x=100
y=100
size = 400
root=tk.Tk()
root.geometry("200x200+100+100")
root.attributes("-toolwindow",True)
root.attributes("-topmost", True) #囧 mostopにしてぇ～～～～
root.resizable(False, False)


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
    print("leave")
    root.focus_force()
    root.geometry(f"{root.winfo_screenwidth()}x{root.winfo_screenheight()}+{0}+{0}")

def d(e):
    global flag
    flag=False
    global x
    global y
    x=int(e.x - size)
    y=int(e.y - size)
    root.geometry(f"{size}x{size}+{int(x)}+{int(y)}")
    root.attributes("-topmost", True)
    root.focus_force()

def ffff():
    root.focus()
    root.focus_force()
    root.after(1,ffff)

root.after(1,ffff)
root.bind("<KeyPress>",b)
root.bind("<Motion>",a)
root.bind("<Leave>",c)
root.bind("<Enter>",d)


root.mainloop()