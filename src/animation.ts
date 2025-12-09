function displayBranchname(featureName:string){
    console.log(`\x1b[1m${featureName}\x1b[0m`); // Bold
    console.log(`\x1b[3m${featureName}\x1b[0m`); // Italic

    
}

// printing the content in bold or italic state

displayBranchname("music")