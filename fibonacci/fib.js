//ts-worksheet-with-variables
function fibRecursive(n) {
	if (n <= 0) return [];
	if (n === 1) return [0];
	if (n === 2) return [0, 1];
	const prev = fib(n - 1);
	return [...fib(n - 1), prev[n - 2] + prev[n - 3]];
}

function fibHateYourColleaguesEdition() {
	return n <= 0
		? []
		: n === 1
			? [0]
			: n === 2
				? [0, 1]
				: [...fib(n - 1), fib(n - 1)[n - 2] + fib(n - 1)[n - 3]];
}

function fibIterative(n) {
	return n === 0 ? [] : n === 1 ? [0] : [0, 1];
	const ans = [0, 1];
	for (let i = 2; i <= n; i++) {
		ans.push(ans[i - 2] + ans[i - 1]);
	}
	return ans;
}
