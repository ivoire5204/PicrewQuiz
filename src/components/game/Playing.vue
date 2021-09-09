<template>
    <div>
        <p>게임이 진행되고 있어요!</p>
        <p>다음 분들이 게임에 참여했어요! 누가 만든 그림인지 한 번 맞춰볼까요?</p>
        <v-form>
            <table>
                <tr v-for="applicant in applicants" v-bind:key="applicant">
                    <td class="applicant">
                        {{ applicant }}
                    </td>
                    <td class="answer">
                        <v-text-field class="answer"></v-text-field>
                    </td>
                </tr>
            </table>
            <v-row>
                <!--
                <v-btn class="arrowbtn" elevation="0" fab>&#60;</v-btn>
                <div class="gamecontent">
                    <v-img class="thumbnail" v-bind:src="gamecontent.thumbnailsrc"></v-img>
                    <span>{{ gamecontent.number }}</span>
                </div>
                <v-btn class="arrowbtn" elevation="0" fab>&#62;</v-btn>
                -->
                <section id="gamecontent">
                <div class="btncontainer left">
                    <v-btn elevation="0" fab>&#60;</v-btn>
                </div>
                <div class="slidebox">
                    <div class="slidecontent" v-for="(content, index) in gamecontent" v-bind:key="index">
                        <img class="thumbnail" v-bind:src="content.content.thumbnailsrc">
                        <p>{{ content.content.number }}</p>
                    </div>
                </div>
                <div class="btncontainer right">
                    <v-btn elevation="0" fab>&#62;</v-btn>
                </div>
            </section>
            </v-row>
            <v-row>
                <router-link to="/"><v-btn elevation="2">제출하기</v-btn></router-link>
            </v-row>
        </v-form>
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
        // 서버에서 status 값 가져오기
        username: "User@server.com",
        applicants: [
            "Ann@server.com",
            "Bob@server.com",
            "Charlie@server.com"
        ],
        timecreated: "2021년 00월 00일 00:00",
        timeleft: "00:00:00",
        picrewlink: "https://picrew.me/image_maker/614354",
        thumbnailsrc: "https://s3-ap-northeast-2.amazonaws.com/mastodon-planet-moe/cache/preview_cards/images/000/170/295/original/70bd094986a23b72.png",
        gamecontent: [
            { content: {
                    thumbnailsrc: "https://cdn.picrew.me/app/image_maker/947708/icon_PiRTf3Af16vdKlKs.png",
                    number: "1"
            }},
            { content: {
                    thumbnailsrc: "https://cdn.picrew.me/app/image_maker/947708/icon_PiRTf3Af16vdKlKs.png",
                    number: "2"
            }},
            { content: {
                    thumbnailsrc: "https://cdn.picrew.me/app/image_maker/947708/icon_PiRTf3Af16vdKlKs.png",
                    number: "3"
            }}        
        ]
    })
}
</script>

<style>
    table {
        margin-bottom: 50px;
    }
    .applicant {
        width: 200px;
    }
    .answer {
        width: 10px;
    }
    #gamecontent {
    margin: 0px 30px 200px 30px;
    padding-bottom: 200px;
    }
    .slidecontent {
    position: absolute;
    border: 1px solid;
    width: 250px;
    height: 270px;
    text-align: center;
    margin: 0px 20px;
    padding: 10px 10px;
    }
    .btncontainer {
    position: absolute;
    overflow: hidden;
    display: table;
    height: 270px;
    background-color: white;
    }
    .btncontainer > button {
        display: table-cell;
        font-size: 30px;
        vertical-align: middle; /*적용안됨*/
        top: 130px;
    }
</style>