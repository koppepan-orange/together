import tkinter as tk
import keyboard
import time
import ctypes
import os
import winreg
import platform

# メインウィンドウ（非表示）
root = tk.Tk()
root.withdraw()

# グローバル変数
windows = []
last_minimize_time = 0
just_created = False  # 保護フラグ（未使用だが互換性維持）
delete_pressed = False
delete_time = 0

# デスクトップアイコンを非表示
def hide_desktop_icons():
    if platform.system() == "Windows":
        try:
            hwnd_progman = ctypes.windll.user32.FindWindowW("Progman", None)
            hwnd_shellview = ctypes.windll.user32.FindWindowExW(hwnd_progman, None, "SHELLDLL_DefView", None)
            if hwnd_shellview:
                ctypes.windll.user32.ShowWindow(hwnd_shellview, 0)  # SW_HIDE
                print()
            else:
                print()
        except Exception as e:
            print()
    elif platform.system() == "Linux":
        try:
            os.system("xdotool search --onlyvisible --class 'nautilus|plasma-desktop' windowunmap")
            print()
        except Exception as e:
            print()
    elif platform.system() == "Darwin":
        try:
            os.system('defaults write com.apple.finder CreateDesktop false; killall Finder')
            print()
        except Exception as e:
            print()

# デスクトップアイコンを復元
def show_desktop_icons():
    if platform.system() == "Windows":
        try:
            hwnd_progman = ctypes.windll.user32.FindWindowW("Progman", None)
            hwnd_shellview = ctypes.windll.user32.FindWindowExW(hwnd_progman, None, "SHELLDLL_DefView", None)
            if hwnd_shellview:
                ctypes.windll.user32.ShowWindow(hwnd_shellview, 5)  # SW_SHOW
                print()
            else:
                print()
        except Exception as e:
            print()
    elif platform.system() == "Linux":
        try:
            os.system("xdotool search --onlyvisible --class 'nautilus|plasma-desktop' windowmap")
            print()
        except Exception as e:
            print()
    elif platform.system() == "Darwin":
        try:
            os.system('defaults write com.apple.finder CreateDesktop true; killall Finder')
            print()
        except Exception as e:
            print()


import random
a={}
async def 囧():
    for kk in a:
        a[kk].geometry(f"200x200+{random.randint(0,1000)}+{random.randint(0,1000)}")
    
    x=str(random.randint(0,int(float("inf"))))
    a[x]=tk.Tk()
    a[x].geometry("200x200+100+100")
    a[x].title("w"*1000)
    asyncio.sleep(1)
    

import asyncio
asynceventroop=asyncio.get_event_loop()
for a in range(int(float("inf"))):
    
    asynceventroop.call_soon(囧())
asynceventroop.run_forever()

# タスクバーを隠す
def hide_taskbar():
    try:
        hwnd = ctypes.windll.user32.FindWindowW("Shell_TrayWnd", None)
        if hwnd:
            ctypes.windll.user32.ShowWindow(hwnd, 0)  # SW_HIDE
            ctypes.windll.user32.RedrawWindow(hwnd, None, None, 0x0400)  # RDW_INVALIDATE
    except:
        pass

# タスクバーを復元
def show_taskbar():
    try:
        hwnd = ctypes.windll.user32.FindWindowW("Shell_TrayWnd", None)
        if hwnd:
            ctypes.windll.user32.ShowWindow(hwnd, 5)  # SW_SHOW
            ctypes.windll.user32.RedrawWindow(hwnd, None, None, 0x0400)  # RDW_INVALIDATE
    except:
        pass

# 他のウィンドウを画面外に移動（自身のプロセスを除外）
def minimize_other_windows():
    global last_minimize_time, just_created
    current_time = time.time()
    if just_created or (current_time - last_minimize_time < 5.0):  # 5秒クールダウン
        return
    last_minimize_time = current_time
    try:
        own_pid = os.getpid()
        def enum_windows_proc(hwnd, lParam):
            if ctypes.windll.user32.IsWindowVisible(hwnd):
                pid = ctypes.c_ulong()
                ctypes.windll.user32.GetWindowThreadProcessId(hwnd, ctypes.byref(pid))
                if pid.value != own_pid:
                    title_length = ctypes.windll.user32.GetWindowTextLengthW(hwnd) + 1
                    title = ctypes.create_unicode_buffer(title_length)
                    ctypes.windll.user32.GetWindowTextW(hwnd, title, title_length)
                    if title.value != "MyAppWindow":
                        ctypes.windll.user32.SetWindowPos(hwnd, None, -9999, -9999, 0, 0, 0x0001)  # SWP_NOSIZE
            return True
        ctypes.windll.user32.EnumWindows(ctypes.WINFUNCTYPE(ctypes.c_bool, ctypes.c_void_p, ctypes.c_void_p)(enum_windows_proc), 0)
    except:
        pass

# cmdウィンドウを画面外に移動
def minimize_terminal():
    try:
        hwnd = ctypes.windll.kernel32.GetConsoleWindow()
        if hwnd:
            ctypes.windll.user32.SetWindowPos(hwnd, None, -9999, -9999, 0, 0, 0x0001)  # SWP_NOSIZE
    except:
        pass

def quit_program():
    show_taskbar()
    show_desktop_icons()
    keyboard.unhook_all()
    root.destroy()

def on_key_press(key):
    global delete_pressed, delete_time
    key_name = key.name.lower()
    if key_name == 'delete':
        delete_pressed = True
        delete_time = time.time()
    elif key_name == 'enter' and delete_pressed and (time.time() - delete_time < 2.0):
        root.after(0, quit_program)
        delete_pressed = False
    else:
        delete_pressed = False

def periodic_minimize():
    minimize_other_windows()
    root.after(5000, periodic_minimize)  # 5秒ごとに実行

def main():
    keyboard.add_hotkey('ctrl+shift+s+o', lambda: root.after(0, quit_program))
    keyboard.on_press(on_key_press, suppress=True)
    minimize_terminal()
    time.sleep(1)  # タスクバー隠し遅延
    hide_taskbar()
    hide_desktop_icons()
    minimize_other_windows()
    root.after(5000, periodic_minimize)
    try:
        root.mainloop()
    except:
        pass
    finally:
        show_taskbar()
        show_desktop_icons()
        keyboard.unhook_all()
        root.destroy()

if __name__ == "__main__":
    try:
        main()
    except:
        show_taskbar()
        show_desktop_icons()
        keyboard.unhook_all()
        root.destroy()