<template>
    <div>
        <header>
            <h1>{{ username }} 님의 게임</h1>
            <p>{{ timecreated }} 생성됨</p>
        </header>
        <p id="status">이미 종료된 게임이에요!</p>
        <div id="gallery">
            <v-btn id="leftarrow" elevation="0" fab>&#60;</v-btn>
            <div class="gamecontent" v-bind="gamedata">
                <!--v-for 사용-->
                <v-img src=""></v-img>
                <!--유저 이름 태그-->
            </div>
            <v-btn id="rightarrow" elevation="0" fab>&#62;</v-btn>
        </div>
        <div id="appliers" v-bind:key="appliers">
            <p>그림을 제출해주신 분</p>
            <li>
                <ul>{{ username }}</ul> 
            </li>
        </div>
        <div id="participants" v-bind="participants">
            <p>퀴즈에 참여해주신 분</p>
            <li>
                <ul>{{ username }}</ul> <!--v=for-->
            </li>
        </div>
        <p>{{ username }}님이 가장 많이 맞췄어요!</p>
        <p>{{ username }}님이 가장 많은 연합우주원을 속였어요!</p>
        <p>{{ username }}님이 가장 많은 연합우주원들에게 들켰어요!</p>
    </div>
</template>