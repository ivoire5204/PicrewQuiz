<template>
    <div>
        <header>
            <h1>연합우주 픽크루 가족오락관</h1>
        </header>
        <section id="introduction">
            <h3>픽크루 가족오락관이란?</h3>
            <p>다양한 아티스트의 템플릿으로 이미지를 만드는 플랫폼 픽크루를 이용해 친구들과 함께 그림을 맞춰보는 게임입니다!<br> 제안자가 원하는 픽크루 템플릿과 함께 게임을 생성하면, 참가자들이 해당 템플릿으로 만든 이미지를 제출하고, 제출한 이미지를 모아 게임을 시작합니다. <br>
            게임 페이지에는 참가자의 명단과 제출된 그림이 무작위로 섞여 보여집니다. 평소 친구의 취향이나 관심사를 통해 누가 만든 그림일지 맞춰보세요!</p>
            <router-link to="/create-game">
                <v-btn id="creategamebtn">새 게임 생성하기</v-btn>
            </router-link>
        </section>
        <section id="nowplaying">
            <h3>진행중인 게임</h3>
            <div class="btncontainer left">
                <v-btn elevation="0" fab>&#60;</v-btn>
            </div>
            <div class="slidebox">
                <div class="slidecontent" v-for="(content, index) in nowplaying" v-bind:key="index">
                <router-link to="/000000000000">
                    <img class="thumbnail" v-bind:src="content.content.thumbnailsrc">
                    <p>{{ content.content.username }}님의 게임</p>
                </router-link>
                <p><a v-bind:href="content.content.picrewlink">{{ content.content.picrewlink }}</a></p>
                <p>{{ content.content.status }}</p>
                <p>남은 시간 {{ content.content.timeleft }}</p>
                </div>
            </div>
            <div class="btncontainer right">
                <v-btn elevation="0" fab>&#62;</v-btn>
            </div>
        </section>
        <section id="archives">
            <h3>아카이브</h3>
            <div class="btncontainer left">
                <v-btn elevation="0" fab>&#60;</v-btn>
            </div>
            <div class="slidebox">
                <div class="slidecontent" v-for="(content, index) in archives" v-bind:key="index">
                    <router-link to="/000000000000">
                        <img class="thumbnail" v-bind:src="content.content.thumbnailsrc">
                        <p>{{ content.content.username }}님의 게임</p>
                    </router-link>
                    <p><a v-bind:href="content.content.picrewlink">{{ content.content.picrewlink }}</a></p>
                </div>
            </div>
            <div class="btncontainer right">
                <v-btn elevation="0" fab>&#62;</v-btn>
            </div>
        </section>
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
        nowplaying: [
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
        ],
        archives: [
            { content: {
                    thumbnailsrc: "https://cdn.picrew.me/app/image_maker/947708/icon_PiRTf3Af16vdKlKs.png",
                    username: "User@server.com",
                    picrewlink: "https://picrew.me/image_maker/614354",
            }},
            { content: {
                    thumbnailsrc: "https://cdn.picrew.me/app/image_maker/947708/icon_PiRTf3Af16vdKlKs.png",
                    username: "User@server.com",
                    picrewlink: "https://picrew.me/image_maker/614354",
            }},
            { content: {
                    thumbnailsrc: "https://cdn.picrew.me/app/image_maker/947708/icon_PiRTf3Af16vdKlKs.png",
                    username: "User@server.com",
                    picrewlink: "https://picrew.me/image_maker/614354",
            }}        
        ]

    })
}
</script>

<style>
    @import "Index.css";
</style>