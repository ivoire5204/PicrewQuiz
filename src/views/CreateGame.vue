<template>
    <div>
        <h1>새 게임 생성하기</h1>
        <v-form>
            <v-row>
                연합우주 멤버들과 함께할 픽크루 링크를 적어주세요!
            </v-row>
            <v-row class="form">
                <v-text-field
                    v-model="picrewlink"
                    label="예) https://picrew.me/image_maker/0000000"
                ></v-text-field>
            </v-row>
            <v-row>
                참가 신청은 얼마동안 받을까요?
            </v-row>
            <v-row class="form">
                <v-select
                    :items="timedropdown"
                ></v-select>
            </v-row>
            <v-row>
                게임은 얼마동안 진행할까요?
            </v-row>
            <v-row class="form">
                <v-select
                    :items="timedropdown"
                    @click="submit"
                ></v-select>
                <!--@는 v-on과 같음-->
            </v-row>
        </v-form>
        <v-row>
            <router-link to="/">
                <v-btn elevation="2">게임 생성하기</v-btn>
            </router-link>
        </v-row>
        <!--a와 비슷한 기능. 페이지 리로드 차단-->        
        <v-row>
            <router-link to="/">
                <v-btn elevation="2">메인</v-btn>
            </router-link>
        </v-row>
        

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
        timedropdown: ['5분', '10분', '15분', '20분', '30분', '1시간', '2시간']
    })
}
// lifecycle에 따라 메소드 실행. 
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap');

html, body {
    font-family: 'Noto Sans KR', 'Malgun Gothic', 'Dotum', sans-serif;
}
h1 {
    margin: 30px 0px 70px 30px;
}
.row, button {
    margin-left: 30px;
}
button {
    margin-bottom: 20px;
}
.form {
    margin-bottom: 30px;
    width: 400px;
}
</style>