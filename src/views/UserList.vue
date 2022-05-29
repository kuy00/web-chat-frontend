<template>
  <div id="container">
    <SideMenu />
    <div id="main-container">
      <div id="search-container">
        <input
          id="input-container"
          type="text"
          placeholder="search"
          @input="search"
        >
        <svg-loader
          id="svg-container"
          :svgFile="searchSvg"
          :width="40"
          :height="30"
          fill="gray"
        />
      </div>
      <ul style="padding: 0px">
        <li
          v-for="user in filtered"
          id="list"
          :key="user.id"
          :style="setStyle(user)"
          @click="chatt($event, user)"
        >
          <div id="image-container">
            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile23.uf.tistory.com%2Fimage%2F2207573D58CFDE2704BB29">
          </div>
          <div>
            <span>{{ user.name }}</span>
          </div>
        </li>
      </ul>
    </div>
    <ChattingRoom v-model="currentUser" />
  </div>
</template>

<script>
import SideMenu from '../components/SideMenu.vue'
import ChattingRoom from '../components/ChattingRoom.vue'
import { error } from '../notification'
import search from '@/assets/search.svg'

export default {
  name: 'UserList',
  components: {
    SideMenu,
    ChattingRoom,
  },
  data: function () {
    return {
      searchSvg: search,
      searchData: '',
      userList: [],
      currentUser: {},
    }
  },
  computed: {
    filtered: function () {
      return this.userList.filter(user => {
        return user.name.indexOf(this.searchData.toLowerCase()) > -1
      })
    },
  },
  mounted: function () {
    this.fetch()
  },
  methods: {
    fetch: async function () {
      const result = await this.$http('/user', 'get')

      if (result.status === 200) {
        this.userList = result.data
      } else {
        error(this, result.data.message)
      }
    },
    search: function (e) {
      this.searchData = e.target.value
    },
    chatt: function (e, user) {
      this.currentUser = user
    },
    setStyle: function (user) {
      return this.currentUser === user ? 'background-color: lightgray' : ''
    },
  },
}
</script>

<style scoped>
  #container {
    width: 100%;
    height: 100%;
    display: flex;
  }
  #main-container {
    flex: 1;
    height: 100%;
    overflow-y: auto;
  }
  #list {
    display: flex;
    padding: 10px 15px;
  }
  #list:hover {
    cursor: pointer;
    background-color: lightgray;
  }
  #image-container {
    width: 60px;
    height: 60px;
    border-radius: 20px;
    overflow: hidden;
    margin-right: 10px;
  }
  #image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  #list span {
    font-size: 17px;
    line-height: 60px;
  }
  #search-container {
    display: flex;
    height: 40px;
    border-radius: 10px;
    border: 2px solid gray;
    margin: 10px;
    overflow: hidden;
  }
  #input-container {
    width: 100%;
    height: 100%;
    align-self: center;
    border: none;
    padding: 10px;
  }
  #input-container:focus {
    outline: none;
  }
  #svg-container {
    align-self: center;
  }
</style>
