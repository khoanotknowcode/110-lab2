let snacksList: string[] = ["chips", "donuts", "trail mix"];

export function printSnacksList(): void {
    for (let snack of snacksList) {
        console.log(snack);
    }
}

printSnacksList();