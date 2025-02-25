
export const questions = [
    {
        id: 1,
        type: "code",
        theory: (
            <>
                <p>We can use list comprehensions to create a new list by filtering elements of an existing one, like creating a list of <span>high_scores</span>.</p>
            </>
        ),
        code_num: 1,
        ide_content: (
            <>
                <p>scores = [ 12, 47, 30, 29, 19, 35 ] </p>
                <br />
                <p>
                    <input style={{ width: "100px" }} />
                    <span> = [ score for score in scores if score &gt; 20 ]</span>
                </p>
                <p><span>print(passing_scores)</span></p>

            </>
        ),
        answer: ['high_scores']
    },
    {
        id: 2,
        type: "theory",
        message: (
            <>
                <p>We start out like usual with a <b>for</b> loop to iterate through each element in the original list, like each <b>score in scores</b>.</p>
            </>
        )
    },
    {
        id: 3,
        type: "theory",
        message: (
            <>
                <p>To copy each <b>score</b> element in the new list, we write <b>score</b> as out expression, without applying any operation.</p>
            </>
        )
    },
    {
        id: 4,
        type: "code",
        theory: (
            <>
                <p>To filter for elements that meet a certain condition, we add an if statement, like here where we only copy the score <span>if score &gt; 20</span>.</p>
            </>
        ),
        code_num: 2,
        ide_content: (
            <>
                <p>scores = [ 12, 47, 30, 29, 19, 35 ] </p>
                <br />
                <p>
                    <span>high_scores = [ score for score in scores </span>
                    <input style={{ width: "100px" }} />
                    <span> ] </span>
                </p>
                <p><span>print(high_scores)</span></p>

            </>
        ),
        answer: ['if score > 20']
    },
    {
        id: 5,
        type: "code",
        theory: (
            <>
                <p>When using a conditional, the usual order is starting with the expression, followed by the for loop, and finishing with the if statement.</p>
                <p><b>Hints:</b> <span>if score &gt; 20</span>&ensp;<span>for score in scores</span>&ensp;<span>score</span></p>
            </>
        ),
        code_num: 3,
        ide_content: (
            <>
                <p>scores = [ 12, 47, 30, 29, 19, 35 ] </p>
                <br />
                <p>
                    <span>high_scores = [ </span>
                    <input style={{ width: "50px" }} />
                    <input style={{ width: "150px" }} />
                    <input style={{ width: "100px" }} />
                    <span> ] </span>
                </p>
                <p><span>print(high_scores)</span></p>

            </>
        ),
        answer: ['score', 'for score in scores', 'if score > 20']
    },
    {
        id: 6,
        type: "mcq",
        question: (
            <>
                <p>Can we filter elements of a list with a list comprehension?</p>
            </>
        ),
        ide: false,
        options: ['Yes, by adding a conditional', 'No, we can only copy lists with list comprehensions'],
        answer: 1
    },
    {
        id: 7,
        type: "mcq",
        question: (
            <>
                <p>Why do we still need a <span>for</span> loop when filtering?</p>
            </>
        ),
        ide: false,
        options: ['We don\'t need to loop', 'To be able to check the condition for each element'],
        answer: 2
    },
    {
        id: 8,
        type: "mcq",
        question: (
            <>
                <p>What happens when we use the loop variable as the expression?</p>
            </>
        ),
        ide: false,
        options: ['We copy the original list', 'We can\'t use only the loop variable, we\'d get an error'],
        answer: 1
    },
    {
        id: 9,
        type: "mcq",
        question: (
            <>
                <p>Based on the conditional inside the list comprehension, what elements are we placing into the <span>apply_taxes</span> list?</p>
            </>
        ),
        ide: true,
        ide_content: (
            <>
                <p>prices = [ 150, 45, 200, 340 ]</p>
                <p>apply_taxes = [ price for price in prices if price &gt; 150 ]</p>
                <p>print(apply_taxes)</p>
            </>
        ),
        options: ['The elements in prices that are greater than 150', 'We aren\'t filtering out any elements'],
        answer: 1
    },
    {
        id: 10,
        type: "mcq",
        question: (
            <>
                <p>What does this comprehension do?</p>
            </>
        ),
        ide: true,
        ide_content: (
            <>
                <p>item_prices = [ 120, 25, 40 ]</p>
                <br />
                <p>under_50 = [ price for price in item_prices if price &lt; 50 ]</p>
                <p>print(under_50)</p>
            </>
        ),
        options: ['It loops through item_prices and copies each value', 'It loops through item_prices and copies each value that is less than 50'],
        answer: 2
    },
    {
        id: 11,
        type: "mcq",
        question: (
            <>
                <p>What are the parts that make up a loop comprehension that filters a list?</p>
            </>
        ),
        ide: false,
        options: ['First, an expression, and then a conditional statement', 'First, an expression, then a for loop,and finally, a conditional statement'],
        answer: 2
    },
    {
        id: 12,
        type: "code",
        theory: (
            <>
                <p>Code a <span>for</span> loop to iterate through each <span>website</span> in <span>websites</span>.</p>
            </>
        ),
        code_num: 4,
        ide_content: (
            <>
                <p>websites = [ "nytimes.com", "lemonde.fr", "economist.com" ]</p>
                <br />
                <p>
                    <span>french = [ website </span>
                    <input style={{ width: "180px" }} />
                    <span>if website.count(".fr" &gt; 0) ] </span>
                </p>
                <br />
                <p><span>print(french)</span></p>
            </>
        ),
        answer: ['for website in websites']
    },
    {
        id: 13,
        type: "code",
        theory: (
            <>
                <p>Only add french websites to the new list by coding an <span>if</span> statement that checks if <span>website</span> contains <span>".fr"</span> exactly once.</p>
                <p><b>Hints:</b> <span>==</span>&ensp;<span>website.count(".fr")</span>&ensp;<span>if</span></p>
            </>
        ),
        code_num: 5,
        ide_content: (
            <>
                <p>websites = [ "nytimes.com", "lemonde.fr", "economist.com" ]</p>
                <br />
                <p>
                    <span>french = [ website for website in websites </span>
                    <input style={{ width: "20px" }} />
                    <input style={{ width: "150px" }} />
                    <input style={{ width: "30px" }} />
                    <span> 1 ] </span>
                </p>
                <br />
                <p><span>print(french)</span></p>
            </>
        ),
        answer: ['if', 'website.count(".fr")', '==']
    },
    {
        id: 14,
        type: "code",
        theory: (
            <>
                <p>Complete the conditional so that only values that are at least <span>30</span> and at most <span>50</span> are copied in the new list.</p>
                <p><b>Hints:</b> <span>and</span>&ensp;<span>level == 30</span>&ensp;<span>level &lt;= 50</span></p>
            </>
        ),
        code_num: 6,
        ide_content: (
            <>
                <p>humidity_percent = [ 40, 35, 20, 70 ]</p>
                <br />
                <p>
                    <span>ideal = [ level for level in humidity_percent if level &gt;= 30 </span>
                    <input style={{ width: "40px" }} />
                    <input style={{ width: "90px" }} />
                    <span> ] </span>
                </p>
                <br />
                <p><span>print(ideal)</span></p>
            </>
        ),
        answer: ['and', 'level <= 50']
    }


];




// total number of questions (plus one is for the result page)
let total_ques = questions.length + 1
let total_xp = 0

// calculate total xp
questions.forEach(element => {
    if (element.type === "mcq") {
        total_xp += 10
    }
    else if (element.type === "code") {
        let array = element.answer
        total_xp += (10 * array.length)
    }
});

// right now it is set to 60%, can change this value if difficulty changes
let cutoff = (60 / 100) * total_xp

export const quizDetails = {
    level: 10,
    current_sublevel: 3,
    max_sublevel: 5,
    total_ques: total_ques,
    total_xp: total_xp,
    cutoff: cutoff,
    topic: "Filtering with If Statements",

}

// console.log(quizDetails)

