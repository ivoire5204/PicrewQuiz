<template>
    <div>
        <header>
            <h1>연합우주 픽크루 가족오락관</h1>
        </header>
        <section id="introduction">
            <h3>픽크루 가족오락관이란?</h3>
                <p>다양한 아티스트의 템플릿으로 이미지를 만드는 플랫폼 픽크루를 이용해 친구들과 함께 그림을 맞춰보는 게임입니다!<br> 제안자가 원하는 픽크루 템플릿과 함께 게임을 생성하면, 참가자들이 해당 템플릿으로 만든 이미지를 제출하고, 제출한 이미지를 모아 게임을 시작합니다. </p>
            <router-link to="/create-game">
                <v-btn>새 게임 생성하기</v-btn>
            </router-link>
        </section>
        <section id="nowplaying">
            <h3>진행중인 게임</h3>
            <v-btn class="arrowbtn" elevation="0" fab>&#60;</v-btn>
            <div class="gamecontent">
                <!--v-for 사용. 문제 있음. 임시1-->
                <!--v-for="content in nowplaying"-->
                <router-link to="/000000000000">
                    <v-img class="thumbnail" v-bind:src="gamecontent.thumbnailsrc"></v-img>
                    <p>{{ gamecontent.username }}님의 게임</p>
                </router-link>
                <p><a href="picrewlink">{{ gamecontent.picrewlink }}</a></p>
                <p>{{ gamecontent.status }}</p>
                <p>남은 시간 {{ gamecontent.timeleft }}</p>
            </div>
            <v-btn class="arrowbtn" elevation="0" fab>&#62;</v-btn>
        </section>
        <section id="archive">
            <h3 style="clear:both;">아카이브</h3>
            <v-btn class="arrowbtn" elevation="0" fab>&#60;</v-btn>
            <div class="archive">
                <!--v-for 사용-->
                <a href="">
                    <v-img class="thumbnail" v-bind:src="gamecontent.thumbnailsrc"></v-img>
                    <p>{{ gamecontent.username }}님의 게임</p>
                </a>
                <p><a href="picrewlink">{{ archive.picrewlink }}</a></p>
            </div>
            <v-btn class="arrowbtn" elevation="0" fab>&#62;</v-btn>
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
        gamecontent: {
            thumbnailsrc: "https://s3-ap-northeast-2.amazonaws.com/mastodon-planet-moe/cache/preview_cards/images/000/170/295/original/70bd094986a23b72.png",
            username: "User@server.com",
            picrewlink: "https://picrew.me/image_maker/614354",
            status: "신청 받는 중",
            timeleft: "00:00:00"
        },
        archive: {
            thumbnailsrc: "https://s3-ap-northeast-2.amazonaws.com/mastodon-planet-moe/cache/preview_cards/images/000/170/295/original/70bd094986a23b72.png",
            username: "User@server.com",
            picrewlink: "https://picrew.me/image_maker/614354",
            status: "신청 받는 중",
            timeleft: "00:00:00"
        },
        nowplaying: [
            { content: {
                    thumbnailsrc: "https://s3-ap-northeast-2.amazonaws.com/mastodon-planet-moe/cache/preview_cards/images/000/170/295/original/70bd094986a23b72.png",
                    username: "User@server.com",
                    picrewlink: "https://picrew.me/image_maker/614354",
                    status: "신청 받는 중",
                    timeleft: "00:00:00"
            }},
            { content: {
                    thumbnailsrc: "https://s3-ap-northeast-2.amazonaws.com/mastodon-planet-moe/cache/preview_cards/images/000/170/295/original/70bd094986a23b72.png",
                    username: "User@server.com",
                    picrewlink: "https://picrew.me/image_maker/614354",
                    status: "신청 받는 중",
                    timeleft: "00:00:00"
            }},
            { content: {
                    thumbnailsrc: "https://s3-ap-northeast-2.amazonaws.com/mastodon-planet-moe/cache/preview_cards/images/000/170/295/original/70bd094986a23b72.png",
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
    h1 {
        margin: 30px 30px 50px 30px;
        /* 스타일 적용 안 됨 오류 */
    }
    #introduction {
       margin: 0px 30px;
    }
    .gamecontent, .archive {
        border: 1px solid;
        width: 250px;
        text-align: center;
        margin: 0px 20px;
        float: left;
    }
    .arrowbtn {
        float: left;
        background-color: #00000000;
        font-size: 30px;
    }
    .thumbnail {
        width: 200px;
        margin: 0px auto;
    }
</style>