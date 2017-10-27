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

primitive 원시
		boolean, numbers, paragragh, null, undifined

objects
		others

object being themself. not same

> var obj1 = {};
> var obj2 = {};
> obj1 === obj2
		false
> obj1 === obj1
true

but, in primitive, value is same, it's same

	var prim1 = 123;
	var prim2 = 123;
	prim1 === prim2

		true

primitive =
	true, false
		1736, 1.351
		'abc', "abc"
		undefined, null

		comparable,
			immutable,


/*
* typeof and instanceof
* */

typeof for primitive,
instanceof for object

> typeof true
							 'boolean'
> typeof 'abc'
								'string'
		typeof {}
		'object'
		typeof []
		'object'


		but, typeof null > 'object' is.. exception. it's bug

> var b = new Bar();
> b instanceof Bar
		true

> {} instanceof Object
		true

> [] instanceof Array
		true

> [] instanceof Object
		true

> undefined instanceof Object
		false
> null instanceof Object
		false

/*
* typeof 는 주로  원시값 분류, 맞나 확인할때 쓰는 듯 하고
* instancefo 는 객체에서 들어있나? 생성되었나? 를 판단하는 연산자 인듯
* */