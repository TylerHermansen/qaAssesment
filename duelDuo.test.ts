
import { Builder, Capabilities, By } from "selenium-webdriver"
import { convertToObject } from "typescript"

require('chromedriver')


const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('clicking Draw button displays the div with the id of choices', async () =>{
    driver.get('http://localhost:3000/')
    const drawButton = await driver.findElement(By.id('draw'))
    await drawButton.click()
    await driver.sleep(2000)
    const choices = await driver.findElement(By.css('#choices'))
    await driver.sleep(2000)

    expect(choices).toBeTruthy()
})

test('the id of wins contains text of Wins:', async ()=>{
    driver.get('http://localhost:3000/')
    const winId = await driver.findElement(By.id('wins')).getText();
    
    expect(winId).toBe('Wins: 0')
})