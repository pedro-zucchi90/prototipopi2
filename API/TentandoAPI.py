import requests

def searchArticle():
    parameter = {
        'q': "Plasma Propulsion",
        'page': 1,
        'api_key': '4wkGEfP5XK3FlcXekjLUevfbQBAgrg48fkkiMcRQ'
    }
    resposta = requests.get('https://ntrs.nasa.gov/api/citations/search', params=parameter)
    if resposta.status_code == 200:
        resultados = resposta.json().get('results', [])
        if resultados:
            for artigo in resultados:
                titulo = artigo['title']
                dataPublicacao = artigo['created']
                link = f"https://ntrs.nasa.gov/citations/{artigo['id']}"
                print(f"Title: {titulo}\nPublication Date: {dataPublicacao}\nLink: {link}\n")
        else:
            print("Bah!")
searchArticle()