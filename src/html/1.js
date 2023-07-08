export function foo() {
    console.log('foo');

    localStorage.setItem('USER_TOKEN', 'FOO')

    localStorage.clear()

    // sessionStorage.setItem('deault', 'foo')
}


