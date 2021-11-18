//--------------------TESTING-----------------------
//Create an instance of the Test class and perform code tests using assert().
//Once all tests are done, view the test results using results().
class Test {
    constructor() {
        this.total = 0;
        this.passed = 0;
        this.failed = 0;
    }

    /*
    This method performs a simple test on a piece of code. If the test passes, the number of tests
    the Test instance has passed is incremented. Otherwise, the number of tests failed is incremented.
    The number of total tests is also incremented at the end. Nothing is returned.

    "assertion" is an expression that evaluates to a boolean (true if the test passes).
    "fail" specifies the message to output if the test fails.
    "log" is a boolean that dictates whether or not to log the "fail" parameter's message in the console.
    */
    assert(assertion, fail, log = false) {
        if(!assertion) {
            if(log) { console.log(fail); }//Not using console.assert since the test was already run
            this.failed++;
        } else { this.passed++; }
        this.total++;
    }
  
    /*
    This method is used for printing out the Test instance's results. The results may either be printed
    in an alert() or in the console. The total number of tests run, number of tests passed, and number
    of tests failed are printed. Nothing is returned.

    "alerts" is a boolean that if set to true, will ensure test results are printed as an alert().
    */
    results(alerts = false) {
        if(alerts) {
            alert("Tests run: %d, Passed: %d, Failed: %d", this.total, this.passed, this.failed);
        }
        else {
            console.log("Tests run: %d, Passed: %d, Failed: %d", this.total, this.passed, this.failed);
        }
    }
}