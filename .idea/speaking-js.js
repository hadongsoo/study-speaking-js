/*
* js has statement expression
* */

// this is statement 문
var x;
if (y >= 0){
	x = y;
} else {
	x = -y;
}

//this is expression
var x = y >= 0 ? y : -y ;


//it can be arguemnts
Function(y>= 0 ? y: -y)


/*
* reseved words 식별자
* */

arguemtns
break
case
catch
class
const
continue
debugger
default
delete
do
else
enum
export
extends
false
finally
for
function
if
implements
import
in
instanceof
interface
let
new
null
package
private
protected
public
return
static
super
switch
this
throw
true
try
typeof
var
void
while

// these are not 'reseved words' but you have to think about them 'reseved words'
Infinity
NaN
undefined

/*
* Value 값
* */


// every value have property. you can use property with dot (.). it calls dot notation
> var str = 'abc';
> str.length
3

or

'abc'.length

also, when you use put value in property, you can use dot notation
> var obj = {};
> obj.foo = 123;
123
> obj.foo
123

when you call 'Method' also use dot notation

		> 'hello'.toUpperCase()
		'HELLO'


/*
* primitive 원시값 vs objects 객체
* */