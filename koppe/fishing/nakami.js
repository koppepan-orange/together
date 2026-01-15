let list = [
    {
        name:"呪われた隣人の家",
        src:"QhFzkYjcpa"
    },
    {
        name:"何かしらの何か",
        src:"bvHrMC6v5c"
    }
]
for(let ls of list){
    let div = document.createElement('div');
    div.className = `ls ${ls.src}`;
    div.textContent = ls.name;
    div.addEventListener('click', function(){
        window.open(`https://discord.gg/${ls.src}`, '_blank');
    });
    document.querySelector(".column").appendChild(div);
}