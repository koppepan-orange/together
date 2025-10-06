import requests
import webbrowser
import random
import string

def generate_random_domain():
    domain_length = random.randint(5, 10)
    random_name = ''.join(random.choices(string.ascii_lowercase, k=domain_length))
    tld = random.choice([".com", ".net", ".org", ".jp", ".info"])
    return f"http://{random_name}{tld}"

def check_website(url):
    try:
        response = requests.get(url, timeout=5)
        
        
        if response.status_code != 200:
            # print(f"だめー✖ {url} はアクセス不可 ({response.status_code})")
            return False
        
       
        if "<!DOCTYPE html>" not in response.text[:1000]:  
            # print(f"✖ {url} はHTMLではない")
            return False
        
        if len(response.text) < 500:
            # print(f"✖ {url} はページが短すぎる ({len(response.text)} bytes)")
            return False
        
        # print(f"✔ {url} は有効なサイト！")
        return True
    
    except requests.RequestException as e:
        # print(f"✖ {url} はアクセス不可 ({str(e)})")
        return False

def open_random_website():
    """ ランダムなサイトを開く """
    print('検索中...')
    while True:
        url = generate_random_domain()
        if check_website(url):
            print(f"🌍 ブラウザで開きます → {url}")
            webbrowser.open(url)
            open_random_website()

open_random_website()
