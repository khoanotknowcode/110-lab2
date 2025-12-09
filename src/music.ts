let musicsList: string[] = ["Last Chistmas", "Jingle Bell", "Creep"];

export function printMusicList(): void {
    for (let music of musicsList) {
        console.log(music);
    }
}

printMusicList();