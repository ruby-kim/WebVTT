$(document).ready(function () {
    var player = document.querySelector("#customVideo");
    var tracks = player.textTracks[0];
    tracks.oncuechange = function (e) {
        var cue = tracks.activeCues[0];
        if (cue) {
            $("#vttText").text(cue.text);
        }
    }
});