/* mobile menu */
function menuTrigger() {
    document.getElementById("hLinks").style.display="flex";
    document.getElementById("menuBtn").style.display="none";
    document.getElementById("closeBtn").style.display="inline";
}
function closeMenu(){
    document.getElementById("hLinks").style.display="none";
    document.getElementById("menuBtn").style.display="inline";
    document.getElementById("closeBtn").style.display="none";
}