import requests
import bs4
  
header ={'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'}

def scrape(text):
    url = 'https://google.com/search?q=' + text
    
    # request google page
    request_result=requests.get( url,headers=header )

    soup = bs4.BeautifulSoup(request_result.text,"html.parser")
    
    # find all the google results individually
    allData = soup.find_all("div",{"class":"N54PNb BToiNc cvP2Ce"})
   
    # result variable 
    Data = []               
    
    # iterate through each site
    for i in range(len(allData)):
        site = {}
        site["link"] = allData[i].find("a").get("href")
        site["link_name"] = allData[i].find("span",{"class":"VuuXrf"}).text
        site["link_title"] = allData[i].find("h3").text
        site["desc"] = allData[i].find("div",{"class":"VwiC3b yXK7lf lyLwlc yDYNvb W8l4ac lEBKkf"}).text

        print(site)
        Data.append(site)

    return Data


