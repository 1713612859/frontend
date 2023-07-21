export function foo() {
    console.log('foo');

    debugger
    localStorage.setItem('USER_TOKEN', 'FOO')

    localStorage.clear()

    // sessionStorage.setItem('deault', 'foo')
}




