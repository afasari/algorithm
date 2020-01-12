# Directions
1. Given a string, return a new string with the reversed order of characters
## Examples
1. reverse('apple') === 'leppa'
2. reverse('hello') === 'olleh'
3. reverse('Greetings!') === '!sgniteerG'

# Solution 1
1. turn str into array
2. call reverse method
3. join back to string
4. return string

# Solution 2
1. create empty variable string reversed
2. for each in the provided string
3. take the character and add to the start of variable reversed
4. return variable reversed

# Solution 3
1. turn str into array
2. call reduce method
3. take the character and add to the start of variable reversed
4. return variable reversed

# Debugger
1. add debugger statement inside function
2. call the function manually
3. at the terminal, run 'node inspect index.js'
4. to continue, type c and enter
5. to launch 'repl' session, type repl and enter
6. to exit 'repl session, press ctrl + c