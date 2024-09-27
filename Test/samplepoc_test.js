Feature('samplepoc');

const assert = require('assert');

Scenario('Addition test', async ({ I }) => {
    I.wait(5);
    I.tap('#com.example.calculator:id/btn5');
    I.tap('#com.example.calculator:id/add');
    I.tap('#com.example.calculator:id/btn2');
    I.saveScreenshot('AdditionTest.png');
    I.tap('#com.example.calculator:id/equal');
    I.saveScreenshot('AdditionTestResult.png');
 
    let outputValue = await I.grabTextFrom("#com.example.calculator:id/output");

    I.say('The output value is: ' + outputValue);
    assert.strictEqual(outputValue, '7');
});

Scenario('Subtraction test', async ({ I }) => {
    I.wait(5);
    I.tap('#com.example.calculator:id/btn9');
    I.tap('#com.example.calculator:id/subtract');
    I.tap('#com.example.calculator:id/btn2');
    I.saveScreenshot('SubtractionTest.png');
    I.tap('#com.example.calculator:id/equal');
    I.saveScreenshot('SubtractionTestResult.png');

    let outputValue = await I.grabTextFrom("#com.example.calculator:id/output");

    I.say('The output value is: ' + outputValue);
    assert.strictEqual(outputValue, '7');
});

Scenario('Multiply test', async ({ I }) => {
    I.wait(5);
    I.tap('#com.example.calculator:id/btn5');
    I.tap('#com.example.calculator:id/multiply');
    I.tap('#com.example.calculator:id/btn5');
    I.saveScreenshot('MultiplyTest.png');
    I.tap('#com.example.calculator:id/equal');
    I.saveScreenshot('MultiplyTestResult.png');
    
    let outputValue = await I.grabTextFrom("#com.example.calculator:id/output");

    I.say('The output value is: ' + outputValue);
    assert.strictEqual(outputValue, '25'); 
});

Scenario('Division test', async ({ I }) => {
    I.wait(5);
    I.tap('#com.example.calculator:id/btn8');
    I.tap('#com.example.calculator:id/division');
    I.tap('#com.example.calculator:id/btn2');
    I.saveScreenshot('DivisionTest.png');
    I.tap('#com.example.calculator:id/equal');
    I.saveScreenshot('DivisionTestResult.png');
    
    let outputValue = await I.grabTextFrom("#com.example.calculator:id/output");

    I.say('The output value is: ' + outputValue);
    assert.strictEqual(outputValue, '4');
});


