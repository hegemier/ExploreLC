import pyautogui;
pyautogui.PAUSE = 1

screenWidth, screenHeight = pyautogui.size()

print("Move mouse to events")
pyautogui.moveTo(1550, 155)
print("Switch to primary monitor")
pyautogui.click()
print("Click on events")
pyautogui.click()
print("Go back to main page by clicking the logo")
pyautogui.moveTo(20, 155)
pyautogui.click()
print("Go back to events")
pyautogui.moveTo(1550, 155)
pyautogui.click()
print("Go to guides")
pyautogui.moveTo(1350, 155)
pyautogui.click()
print("Go back to events")
pyautogui.moveTo(1550, 155)
pyautogui.click()
print("Go to towns")
pyautogui.moveTo(1450, 155)
pyautogui.click()
print("Go back to events")
pyautogui.moveTo(1550, 155)
pyautogui.click()
print("Go to directory")
pyautogui.moveTo(1650, 155)
pyautogui.click()
print("Go back to events")
pyautogui.moveTo(1550, 155)
pyautogui.click()
print("Go to about")
pyautogui.moveTo(1850, 155)
pyautogui.click()
print("Go back to events")
pyautogui.moveTo(1550, 155)
pyautogui.click()
print("Go to the first event")
pyautogui.press(['down', 'down', 'down'])
print("Move mouse to view event")
pyautogui.moveTo(200, 1050)
print("Click on view event")
pyautogui.click()
print("Click on the cross button")
pyautogui.moveTo(1185, 160)
pyautogui.click()
print("Reopen the view event")
pyautogui.moveTo(200, 1050)
pyautogui.click()
print("Close with close button")
pyautogui.moveTo(1185, 510)
pyautogui.click()

print("Move to the bottom of the page")
gotoBot = []
for i in range(100):
    gotoBot.append('down')
pyautogui.press(gotoBot)

print("Click on view more")
pyautogui.moveTo(1650, 790)
pyautogui.click()
print("Close view more")
pyautogui.moveTo(1185, 160)
pyautogui.click()