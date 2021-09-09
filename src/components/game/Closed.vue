<template>
    <div>
        <p id="status">이미 종료된 게임이에요!</p>
        <div id="gallery">
            <div class="btncontainer left">
                <v-btn elevation="0" fab>&#60;</v-btn>
            </div>
            <div class="slidebox">
                <div class="slidecontent" v-for="(content, index) in gamecontents" v-bind:key="index">
                <img class="thumbnail" v-bind:src="content.content.thumbnailsrc">
                </div>
            </div>
            <div class="btncontainer right">
                <v-btn elevation="0" fab>&#62;</v-btn>
            </div>
        </div>
        <div id="appliers" v-bind:key="appliers">
            <p>그림을 제출해주신 분</p>
            <li>
                <ul v-for="(applier, index) in appliers" v-bind:key="index">{{ applier.username }}</ul> 
            </li>
        </div>
        <div id="participants" v-bind="participants">
            <p>퀴즈에 참여해주신 분</p>
            <li>
                <!--v-for 사용-->
                <ul>{{ username }}</ul>
            </li>
        </div>
        <p>{{ username }}님이 가장 많이 맞췄어요!</p>
        <p>{{ username }}님이 가장 많은 연합우주원을 속였어요!</p>
        <p>{{ username }}님이 가장 많은 연합우주원들에게 들켰어요!</p>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log("으악, 저를 구현해 주세요! x_x");
    },
    beforeDestroy() {
        console.log("으악, 저를 버리고 가지 말아요!");
    },
    data: () => ({
        username: "User@server.com",
        picrewlink: "https://picrew.me/image_maker/614354",
        thumbnailsrc: "https://s3-ap-northeast-2.amazonaws.com/mastodon-planet-moe/cache/preview_cards/images/000/170/295/original/70bd094986a23b72.png",
        appliers: [
            "Ann@server.com",
            "Bob@server.com",
            "Charlie@server.com"
        ],
        participants: [
            "Ann@server.com",
            "Bob@server.com",
            "Charlie@server.com"
        ],
        gamecontents: [
            { content: {
                    thumbnailsrc: "https://cdn.picrew.me/app/image_maker/947708/icon_PiRTf3Af16vdKlKs.png",
                    username: "User@server.com",
                    picrewlink: "https://picrew.me/image_maker/614354",
                    status: "신청 받는 중",
                    timeleft: "00:00:00"
            }},
            { content: {
                    thumbnailsrc: "https://cdn.picrew.me/app/image_maker/947708/icon_PiRTf3Af16vdKlKs.png",
                    username: "User@server.com",
                    picrewlink: "https://picrew.me/image_maker/614354",
                    status: "신청 받는 중",
                    timeleft: "00:00:00"
            }},
            { content: {
                    thumbnailsrc: "https://cdn.picrew.me/app/image_maker/947708/icon_PiRTf3Af16vdKlKs.png",
                    username: "User@server.com",
                    picrewlink: "https://picrew.me/image_maker/614354",
                    status: "신청 받는 중",
                    timeleft: "00:00:00"
            }}        
        ]
    })
}
</script>

<style>
    #gallery {
        margin: 0px 30px 150px 30px;
        padding-bottom: 300px;
    }
    .btncontainer {
        position: absolute;
        overflow: hidden;
        display: table;
        height: 400px;
        background-color: white; 
    }
    .btncontainer > button {
        display: table-cell;
        font-size: 30px;
        vertical-align: middle; /*적용안됨*/
        top: 130px;
    }
    .slidecontent {
        position: absolute;
        border: 1px solid;
        width: 250px;
        height: 300px;
        text-align: center;
        margin: 0px 20px;
        padding: 10px 10px;
    }
</style>