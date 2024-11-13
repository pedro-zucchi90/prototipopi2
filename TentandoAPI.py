import requests

pesquisaUser = input("Coloque sua pesquisa aqui: ")

def buscarArtigo(OqueEuProcuro):
    parametros = {
        'q': OqueEuProcuro,
        'page': 1,
        'pageSize': 5,
        'api_key': '4wkGEfP5XK3FlcXekjLUevfbQBAgrg48fkkiMcRQ'
    }

    resposta = requests.get('https://ntrs.nasa.gov/api/citations/search', params=parametros)

    if resposta.status_code == 200:
        resultados = resposta.json().get('results', [])
        
        if resultados:
            for artigo in resultados:
                titulo = artigo['title']
                dataPublicacao = artigo['created']
                link = f"https://ntrs.nasa.gov/citations/{artigo['id']}"
                print(f"Title: {titulo}\nPublication Date: {dataPublicacao}\nLink: {link}\n")
        else:
            print("Bah, acho que não deu muito certo essa pesquisa!")

buscarArtigo(pesquisaUser)
