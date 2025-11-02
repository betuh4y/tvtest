if (Hls.isSupported()) {
    const video = document.getElementById('video');
    const hls = new Hls();
    const channelSelect = document.getElementById('channel-select');

    // Lista de canais com novos links
    const channels = [
        { name: "A&E Brasil", url: "https://cdn-3.nxplay.com.br/AeE_BRASIL_TK/tracks-v2a1/mono.m3u8" },
        { name: "Discovery ID", url: "https://vivofibratech.org:80/Q3sdXWJw8Kxxx22222/pKefJHyVKExxxxxxxxa12/125438.m3u8" },
        { name: "History Channel 2", url: "https://cdn-3.nxplay.com.br/HISTORY_2_TK/tracks-v2a1/mono.m3u8" },
        { name: "Discovery World", url: "https://cdn-3.nxplay.com.br/DISCOVERY_WORLD_NX/tracks-v2a1/mono.m3u8" },
        { name: "Discovery Science", url: "https://cdn-3.nxplay.com.br/DISCOVERY_SCIENCE_NX/index.m3u8" },
        { name: "CID Latina", url: "https://stream-hls.bauermedia.pt/cidlatina.aac/playlist.m3u8" },
        { name: "ESPN 4", url: "https://cdn-3.nxplay.com.br/ESPN_4/tracks-v2a1/mono.m3u8" },
        { name: "ESPN 4 (Super CDN)", url: "https://super-cdn.link/espn4/index.m3u8" },
        { name: "ESPN 5", url: "https://super-cdn.link/espn5/index.m3u8" },
        { name: "ESPN 6", url: "https://super-cdn.link/espn6/index.m3u8" },
        { name: "ESPN Extra", url: "https://cdn-3.nxplay.com.br/ESPN_EXTRA/tracks-v2a1/mono.m3u8" },
        { name: "ESPN 2", url: "https://super-cdn.link/espn2/index.m3u8" },
        { name: "Nova Família", url: "https://video03.logicahost.com.br/novafamilia01/novafamilia01/playlist.m3u8" },
        { name: "Retro TV", url: "https://stmv1.srvif.com/retrotv/retrotv/playlist.m3u8" },
        { name: "Ubsoft Live", url: "https://ubl-ut-samsung.otteravision.com/ubl/ut/ut.m3u8" },
        { name: "TV Mais Pet", url: "https://isaocorp.cloudecast.com/tvmaispet/tracks-v1a1/mono.m3u8" },
        { name: "Bein Sports", url: "https://live4.beinconnect.us/YallaGoalApp/SSC1.m3u8" },
        { name: "Ottera TV", url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=7333" },
        { name: "Sony One Emoções", url: "https://spt-sonyoneemocoes-1-br.samsung.wurl.tv/playlist.m3u8" },
        { name: "Premiere 7", url: "https://super-cdn.link/premiere7/index.m3u8" },
        { name: "Premiere 6", url: "https://super-cdn.link/premiere6/index.m3u8" },
        { name: "Premiere 5", url: "https://super-cdn.link/premiere5/index.m3u8" },
        { name: "Premiere 4", url: "https://super-cdn.link/premiere4/index.m3u8" },
        { name: "Premiere 3", url: "https://super-cdn.link/premiere3/index.m3u8" },
        { name: "Premiere 2", url: "https://super-cdn.link/premiere2/index.m3u8" },
        { name: "Premiere Clubes", url: "https://super-cdn.link/premiereclubes/index.m3u8" },
        { name: "Sportv 3", url: "https://super-cdn.link/sportv3/index.m3u8" },
        { name: "Sportv 2", url: "https://super-cdn.link/sportv2/index.m3u8" },
        { name: "Sportv", url: "https://super-cdn.link/sportv/index.m3u8" },
        { name: "Real Madrid TV", url: "https://rmtv.akamaized.net/hls/live/2043153/rmtv-es-web/master.m3u8" },
        { name: "AXN", url: "https://cdn-3.nxplay.com.br/AXN_TK/tracks-v2a1/mono.m3u8" },
        { name: "Sony Channel", url: "https://cdn-3.nxplay.com.br/SONY_CHANNEL/tracks-v2a1/mono.m3u8" },
        { name: "Warner Channel", url: "https://cdn-3.nxplay.com.br/WARNER_CHANNEL/tracks-v2a1/mono.m3u8" },
        { name: "Hallo Movies", url: "https://cdn-3.nxplay.com.br/HALLOMOVIES/tracks-v1a1/mono.m3u8" },
        { name: "Movie Sphere", url: "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg00353-lionsgatestudio-moviespherebrazil-samsungbr/playlist.m3u8" },
        { name: "Play Filmes", url: "https://cdn-3.nxplay.com.br/europaplay/tracks-v1a1/mono.m3u8" },
        { name: "NBA Stream", url: "https://cloudserve.world/live/stream_nba4.m3u8" },
        { name: "Árabe Sports", url: "https://37ed58e7.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/Vml6aW9fTVNHU3BvcnRzWm9uZV9ITFM/playlist.m3u8" },
        { name: "Hunter FM Sertanejo", url: "https://hls.hunter.fm/sertanejo/192.m3u8?shtl=KjWfgTVf0o6Ge4z2kuB2uwQs.s98m0N4EKuf70vfj7KMs95we9e2%2BTRFpEOLLNMY%2FSgU" },
        { name: "Hunter FM Pop", url: "https://hls.hunter.fm/pop/192.m3u8?shtl=dHgWQg9SkLWNn2xfDkXT7Blc.Q1%2BYIHWEf%2Bx15rno%2BU4SLO3%2FgilkyftcOYx3e5REDRM" },
        { name: "Hunter FM Pop", url: "https://hls.hunter.fm/pop2k/192.m3u8?shtl=KjWfgTVf0o6Ge4z2kuB2uwQs.s98m0N4EKuf70vfj7KMs95we9e2%2BTRFpEOLLNMY%2FSgU" },
        { name: "Hunter FM Tropical", url: "https://hls.hunter.fm/tropical/192.m3u8?shtl=KjWfgTVf0o6Ge4z2kuB2uwQs.s98m0N4EKuf70vfj7KMs95we9e2%2BTRFpEOLLNMY%2FSgU" }
    ];

    // Adiciona os canais à lista de seleção
    channels.forEach(channel => {
        const option = document.createElement('option');
        option.value = channel.url;
        option.text = channel.name;
        channelSelect.appendChild(option);
    });

    // Altera o canal quando a seleção muda
    channelSelect.addEventListener('change', function() {
        if (this.value) {
            hls.loadSource(this.value);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, function() {
                video.play();
            });
        }
    });
} else {
    console.error("Este navegador não suporta HLS.");
}

