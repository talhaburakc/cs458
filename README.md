# cs458

## Project 1
### Pre Requisites
```
Source code is in the prj1/cs458-prj1-view
test code is in the  prj1/cs458-prj1-test
```

### Pre Requisites
```
pip install selenium
```


### Important Note 
```
Executable chrome driver file in the prj1/cs458-prj1-test is compatible with MacOS.

If you want to test with another operating system, replace executable file by using following link 
    https://chromedriver.storage.googleapis.com/index.html?path=2.35/
    
Also check the following line in the test.py file
    driver = webdriver.Chrome(os.path.abspath(os.curdir)+'/chromedriver',options=chrome_options)

```


### Run the app
```
cd prj1/cs458-prj1-view
npm install
npm start
```

### Run Selenium
```
open a new terminal
cd prj1/cs458-prj1-test
python3 test.py
```


### Pre-saved users:
```
[
  {
    email: elif@gmail.com
    password: elif
  },
  {
    email: irem@gmail.com
    password: irem
  },
  {
    email: talha@gmail.com
    password: talha
    phone: +90 542 761 8930
  }
]
```
