console.log("hello");
//-------------PART 1: TERMS------------------//
// What is the difference between interpolation and concatenation? Give an example of each.
// -- concatenation is when you use + to combine strings together. interpolation is when you use ${string} to combine strings.
//------------------------------------------------------------//
// What does the acronym DRY stand for? Why should we pay attention to it? What programming tools have we learned to write DRY code?
//  -- DRY = DON'T REPEAT YOURSELF. Writing loops instead of repeating yourself. Tab Auto Complete.
//------------------------------------------------------------//
// What is the difference between declaring a variable and assigning a value to a variable? What do we mean when we say "define" a variable?
// -- declaring a variable is giving the variable a name. Assigning a value to a variable is when you give a variable a; number, string or boolean.
//------------------------------------------------------------//
// When should we use const and when should we use let?
// use const when you're declaring a variable that isn't going to chance and use let for any other circumstance
//------------------------------------------------------------//
// Unix question: What is a "parent" directory?

// -- it's the directory above the current directory you're working in.
//------------------------------------------------------------//
// Unix, again: If you're not sure about how to use a Unix command, how can you get more info without being connected to the internet?
// 
//------------------------------------------------------------//
// More Unix: What is "tab completion" and why is it aweseome?

// -- tab completion is when you're writing code and you hit TAB and it autofinishes what it thinks you wanted to write out

//------------------------------------------------------------//

//-------------PART 2: BOOLEAN EXPRESSIONS AND OPERATORS ... and varable assignment------------------//

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

//1. a __ b;
console.log(a < b);
//2. c __ d; -- 
console.log(c > d);
//3. 'Name' __ 'Name';
console.log('Name' === 'Name');
//4. a __ b __ c;
console.log(a < b < c); 
//5. a __ a __ d;
console.log((a === a) < d);
//6. e __ 'Kevin';
console.log(e == 'Kevin');
//7. 48 __ '48'; 
console.log(48 == '48');


//-------------PART 3: While Loops------------------//

//1. Is this an infinite loop or not?
//-- yes, becuase it's a broad loop. It's asking if 

//2.is the following loop an infinite loop? why or why not?
//- no becuase once the loop runs once and at the end of the loop the variable turns false, making the loop stop.

//3.Add a comment before EACH lineof code explaining what the line below it does.

//declaring the variable letters with the value "A"
let letters = "A";
//declaring an i variable with the value 0
let i = 0;

//start of the while loop. the conditions of the loop are, While, i is less than 20...
while (i < 20) {
	//.. while i is less than 20, and one "A" to letters
	letters += "A";
	//then add one to value of i
	i++;
}
//logging the resault of the variable letters
console.log(letters);
//result "AAAAAAAAAAAAAAAAAAAAA"

//-------------PART 4: Loops! ------------------//
//1. Both for loops and while loops repeat code. But what are the differences? What are the similarities
//--while loops through a block of code while a specific condition is true
//--for loops is a control flow statement , which allows code to be ran repeatedly
//2.Basic FOR loop
for (i = 0; i<=999; i++){
	console.log(i);
}
//3.The mechanics for a FOR loop
//Three Components of a FOR loop
//1.declaration
//2.Boolean Expression
//3.Postfix Operator

//4. FOR loop in reverse

for (i = 999; i >= 0; i--){
	console.log(i);
}

//5.More Counting
for (i = 1; i<=10; i++){
	console.log(`The value of i is: ${i} of 10`);
}



//END//