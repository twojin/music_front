<template>
  <div class="content">
    <div class="inner">
      <div class="logo">
        <img class="img" src="@/assets/image/NavBar/logo.png" alt="">
        <span class="text">网易云音乐</span>
      </div>
      <div :class="['menus', activeTab === item.title ? 'active-tab' : '']" v-for="(item, index) in menus"
        :key="item.title" @click="changeMenus(item.title)">
        {{ item.title }}
        <span :class="[activeTab === item.title ? 'arrow' : '']"></span>
      </div>
      <div class="user">
        <div class="user-search">
          <img class="search-icon" src="@/assets/image/NavBar/search.png" alt="">
          <input class="search-input" placeholder="音乐/视频/电台/用户" type="text">
        </div>
        <div class="creater-center">创作者中心</div>
        <div class="user-content">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              <img @mouseenter="openMenus" @mouseleave="closeMenus" class="user-icon"
                src="https://p4.music.126.net/K_B0VM3lX9GfbsERtGCtqg==/109951163780250740.jpg?param=30y30" alt="">
              <div class="user-news">{{ '87' }}</div>
            </span>
            <template #dropdown>
              <el-dropdown-menu class="element-plus-drop-menu">
                <el-dropdown-item command="a">
                  <img src="@/assets/image/NavBar/user.png" alt=""> 我的主页</el-dropdown-item>
                <el-dropdown-item command="b"> <img src="@/assets/image/NavBar/email.png" alt=""> 我的消息</el-dropdown-item>
                <el-dropdown-item command="c"><img src="@/assets/image/NavBar/level.png" alt=""> 我的等级</el-dropdown-item>
                <el-dropdown-item command="c"><img src="@/assets/image/NavBar/vip.png" alt="">vip会员</el-dropdown-item>
                <el-dropdown-item command="c" divided><img src="@/assets/image/NavBar/config.png"
                    alt="">个人设置</el-dropdown-item>
                <el-dropdown-item command="c"><img src="@/assets/image/NavBar/realname.png" alt="">实名认证</el-dropdown-item>
                <el-dropdown-item command="e" divided><img src="@/assets/image/NavBar/logout.png"
                    alt="">退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div :class="[activeTab === '发现音乐' ? 'red' : 'red-coll']">
      <div class="red-content" :style="{ display: activeTab === '发现音乐' ? '' : 'none' }">
        <div :class="['menus2', activeTab2 === item.title ? 'active-tab2' : '']" @click="changeMenus2(item.title)"
          v-for="(item, index) in menus2" :key="item.title">
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const menus = [
  {
    title: '发现音乐',
    url: ''
  },
  {
    title: '我的音乐',
    url: ''
  },
  {
    title: '关注',
    url: ''
  },
  {
    title: '商城',
    url: ''
  },
  {
    title: '音乐人',
    url: ''
  },
  {
    title: '下载客户端',
    url: ''
  }
]
const menus2 = [
  {
    title: '推荐',
    url: ''
  },
  {
    title: '排行榜',
    url: ''
  },
  {
    title: '歌单',
    url: ''
  },
  {
    title: '主播电台',
    url: ''
  },
  {
    title: '歌手',
    url: ''
  },
  {
    title: '新碟上架',
    url: ''
  }
]
const activeTab = ref('发现音乐')
const activeTab2 = ref('推荐')
const userMenus = ref(null)
const changeMenus = (title) => {
  if (title === "商城" || title === "音乐人") {
    //路由跳转新页面
    return;
  }
  activeTab.value = title
}
const changeMenus2 = (title) => {
  activeTab2.value = title
}
const closeMenus = () => {
  console.log('xxx');
}
const openMenus = () => {
  console.log('√√√');
}
</script>

<style lang="scss">
.content {
  width: 100%;
  height: 70px;
  background-color: #242424;

  .inner {
    width: 1100px;
    height: 100%;
    margin: 0 auto;
    display: flex;

    .logo {
      width: 170px;
      height: 100%;
      display: flex;
      align-items: center;

      .img {
        width: 41px;
        height: 41px;
      }

      .text {
        font-size: 24px;
        color: #fff;
      }
    }

    .menus {
      color: #eeeeeeb0;
      height: 100%;
      line-height: 70px;
      padding: 0 16px;
      position: relative;

      .arrow {
        display: inline-block;
        position: absolute;
        bottom: 0px;
        left: calc(50% - 10px);
        width: 0;
        height: 0;
        border: 10px solid red;
        border-top-color: transparent;
        border-left-color: transparent;
        border-right-color: transparent;
      }
    }

    .menus:hover {
      cursor: pointer;
      background-color: #000000;
      color: #fff;
    }

    .active-tab {
      background-color: #000000;
      color: #fff;
    }

    .user {
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      .user-search {
        width: 160px;
        height: 33px;
        background-color: #fff;
        border-radius: 15px;

        .search-icon {
          width: 20px;
          height: 20px;
          border-radius: 5px;
          position: relative;
          top: 4px;
          left: 4px;
        }

        .search-input {
          width: 122px;
          border: none;
          outline: none;
          position: relative;
          left: 10px;
          top: 6px;
        }
      }

      .creater-center {
        width: 90px;
        height: 30px;
        border: 1px solid #eeeeee60;
        border-radius: 15px;
        font-size: 12px;
        text-align: center;
        line-height: 30px;
        color: #eeeeee8a;
      }

      .creater-center:hover {
        border: 1px solid #eee;
        color: #eee;
        cursor: pointer;
      }

      .user-content {
        position: relative;

        .user-icon {
          width: 30px;
          height: 30px;
          border-radius: 15px;
        }

        .user-icon:hover {
          cursor: pointer;
        }

        .user-icon:hover+.user-news {
          display: none;
        }

        .user-news {
          width: fit-content;
          padding: 0px 5px;
          border-radius: 10px;
          position: absolute;
          font-size: 12px;
          background-color: #C20C0C;
          color: #fff;
          top: -3px;
          right: -12px;
        }

        .user-menus {
          position: absolute;
          margin-top: 10px;
          left: -62px;
          width: 160px;
          height: 240px;
          background-color: #2B2B2B;

          .user-arrow {
            display: inline-block;
            position: absolute;
            top: -13px;
            left: calc(50% - 10px);
            width: 0;
            height: 0;
            border: 7px solid #2B2B2B;
            border-top-color: transparent;
            border-left-color: transparent;
            border-right-color: transparent;
          }
        }
      }

    }
  }

  .red {
    background-color: red;
    height: 36px;

    .red-content {
      width: 750px;
      margin: 0 auto;
      display: flex;
      height: 100%;
      align-items: center;

      .menus2 {
        margin: 15px;
        padding: 3px 10px;
        font-size: 14px;
        border-radius: 10px;
        color: #eee;
      }

      .menus2:hover {
        background-color: #9B0909;
        cursor: pointer;
      }

      .active-tab2 {
        background-color: #9B0909;
      }
    }
  }

  .red-coll {
    background-color: red;
    height: 5px;
  }
}
</style>