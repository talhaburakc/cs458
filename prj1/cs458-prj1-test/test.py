from selenium import webdriver
import os
import time

chrome_options = webdriver.ChromeOptions()
driver = webdriver.Chrome(os.path.abspath(os.curdir)+'/chromedriver',options=chrome_options)

############################ Test Case 1 ############################
def test_1():
    driver.get("http://localhost:3000/")                                                    #get homepage
    driver.find_element_by_id("signin_link").click()                                        #signin button
    driver.find_element_by_id("enter_email_phone_input").send_keys("ahmet@gmail.com")       #enter an email that has not an account
    driver.find_element_by_id("enter_password_input").send_keys("pass123")                  #enter password
    driver.find_element_by_id("continue_button").click()                                    #continue button
    message = driver.find_element_by_xpath("/html/body/div/div/div/div/div/div/span").text  #check message
    assert message == "Sorry, we can't find an account with this email address. Please try again or create a new account"
    print("Test case 1 is successful")                                                     #print success

############################ Test Case 2 ############################
def test_2():
    driver.get("http://localhost:3000/")                                                    #get homepage
    driver.find_element_by_id("signin_link").click()                                        #signin button
    driver.find_element_by_id("enter_email_phone_input").send_keys("irem@gmail.com")        #enter an email that has an account
    driver.find_element_by_id("enter_password_input").send_keys("falsepassword")            #enter an incorrect password
    driver.find_element_by_id("continue_button").click()                                    #continue button
    message = driver.find_element_by_xpath("/html/body/div/div/div/div/div/div/span").text  #check message
    assert message == "Incorrect password. Please try again or you can reset your password."
    print("Test case 2 is successful")                                                     #print success

############################ Test Case 3.1 ############################
def test_3_1():
    driver.get("http://localhost:3000/")                                                                #get homepage
    driver.find_element_by_id("signin_link").click()                                                    #signin button
    driver.find_element_by_id("enter_email_phone_input").send_keys("")                                  #enter empty email input
    driver.find_element_by_id("enter_password_input").send_keys("pass123")                              #enter password
    driver.find_element_by_id("continue_button").click()                                                #continue button
    message = driver.find_element_by_xpath("/html/body/div/div/div/div/div/div/form/div[1]/span").text  #check message
    assert message == "Please enter a valid email or phone number."
    print("Test case 3.1 is successful")                                                               #print success

############################ Test Case 3.2 ############################
def test_3_2():
    driver.get("http://localhost:3000/")                                                                #get homepage
    driver.find_element_by_id("signin_link").click()                                                    #signin button
    driver.find_element_by_id("enter_email_phone_input").send_keys("elif@gmail.com")                    #enter email 
    driver.find_element_by_id("enter_password_input").send_keys("")                                     #enter empty password input
    driver.find_element_by_id("continue_button").click()                                                #continue button
    message = driver.find_element_by_xpath("/html/body/div/div/div/div/div/div/form/div[2]/span").text  #check message
    assert message == "Your password must contain between 4 and 60 characters."
    print("Test case 3.2 is successful")                                                               #print success

############################ Test Case 3.2 ############################
def test_3_3():
    driver.get("http://localhost:3000/")                                                                #get homepage
    driver.find_element_by_id("signin_link").click()                                                    #signin button
    driver.find_element_by_id("enter_email_phone_input").send_keys("elif.com")                          #enter invalid email input
    driver.find_element_by_id("enter_password_input").send_keys("elif")                                 #enter password
    driver.find_element_by_id("continue_button").click()                                                #continue button
    message = driver.find_element_by_xpath("/html/body/div/div/div/div/div/div/form/div[1]/span").text  #check message
    assert message == "This email is invalid"
    print("Test case 3.3 is successful")                                                               #print success

############################ Test Case 4.1  ############################
def test_4_1():
    driver.get("http://localhost:3000/")                                        #get homepage
    driver.find_element_by_id("enter_email_input").send_keys("elif@gmail.com")  #enter email
    driver.find_element_by_id("get_started_button").click()                     #get started button
    current_url =  driver.current_url                                           #check current url
    assert current_url == "http://localhost:3000/sign-in"
    print("Test case 4.1 is successful")                                       #print success

############################ Test Case 4.2 ############################
def test_4_2():
    driver.get("http://localhost:3000/")                                        #get homepage
    driver.find_element_by_id("enter_email_input").send_keys("oya@gmail.com")   #enter email
    driver.find_element_by_id("get_started_button").click()                     #get started button
    current_url =  driver.current_url                                           #check current url
    assert current_url == "http://localhost:3000/sign-up1"
    print("Test case 4.2 is successful")                                       #print success

############################ Test Case 5.1 ############################
def test_5_1():
    driver.get("http://localhost:3000/")
    driver.find_element_by_id("signin_link").click()                                    #signin button
    driver.find_element_by_id("enter_email_phone_input").send_keys("+90 542 761 8930")  #enter phone
    driver.find_element_by_id("enter_password_input").send_keys("talha")                #enter password
    driver.find_element_by_id("continue_button").click()                                #continue button
    current_url =  driver.current_url                                                   #check current url
    assert current_url == "http://localhost:3000/success"
    print("Test case 5.1 is successful")                                               #print success

############################ Test Case 5.2 s############################
def test_5_2():
    driver.get("http://localhost:3000/")
    driver.find_element_by_id("signin_link").click()                                   #signin button
    driver.find_element_by_id("enter_email_phone_input").send_keys("talha@gmail.com")  #enter email
    driver.find_element_by_id("enter_password_input").send_keys("talha")               #enter password
    driver.find_element_by_id("continue_button").click()                               #continue button
    current_url =  driver.current_url                                                  #check current url
    assert current_url == "http://localhost:3000/success"
    print("Test case 5.2 is successful")                                              #print success

############################ Automated Netflix Test ############################
def automated_netflix_test():
    test_1()
    test_2()
    test_3_1()
    test_3_2()
    test_3_3()
    test_4_1()
    test_4_2()
    test_5_1()
    test_5_2()
    driver.quit()

automated_netflix_test()
