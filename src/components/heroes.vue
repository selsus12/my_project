<template>
  <div class="content-container">
    <div class="section content-title-group">
      <h2 class="title">Liste Categorie</h2>
      <div class="columns">
        <div class="column is-8" v-if="heroes">
          <ul v-if="!selectedHero">
            <li v-for="hero in heroes" :key="hero.id">
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <div :key="hero.name" class="name" >
                      {{ hero.firstName }} {{ hero.lastName }}
                    </div>
                    
                  </div>
                </div>
                <footer class="card-footer">
                  <button
                    class="link card-footer-item"
                    @click="selectHero(hero)"
                  >
                    <i class="fas fa-check"></i>
                    <span>Select</span>
                  </button>
                </footer>
              </div>
            </li>
          </ul>
            <ul v-if="selectedHero">
              <li v-for="hero in heroes" :key="hero.id">
              <div class="card">
                 <header class="card-header">
                <p class="card-header-title">{{ selectedHero.description}}</p>
              </header>
                <div class="card-content">
                  <div class="content">
                    <div :key="hero.name" class="name" >
                      {{ hero.nomDetail }} {{hero.descriptionDetail}}
                    </div>
                    
                  </div>
                </div>
                <footer class="card-footer">
                  <button
                    class="link card-footer-item"
                    @click="cancelHero(hero)"
                  >
                    <i class="fas fa-check"></i>
                    <span>Retour</span>
                  </button>
                </footer>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns';

import { displayDateFormat, ourHeroes } from '../shared';

export default {
  name: 'Heroes',
  data() {
    return {
      heroes: [],
      selectedHero: undefined,
      selectedDetail: undefined,
      message: '',
      capeMessage: '',
    };
  },
  created() {
    this.loadHeroes();
  },
  computed: {
    fullName() {
      return this.selectedHero
        ? `${this.selectedHero.firstName} ${this.selectedHero.lastName}`
        : '';
    },
  },
  methods: {
    async getHeroes() {
      return new Promise(resolve => {
        setTimeout(() => resolve(ourHeroes), 500);
      });
      
    },
    
   async loadHeroes() {
      this.heroes = [];
      this.heroes = await this.getHeroes();
      this.message = '';
    },
    cancelHero() {
      this.selectedHero = undefined;
    },
    
    selectHero(hero) {
      this.selectedHero = hero;
    }, 

    selectDetail(hero){
      this.selectedHero = hero;
    }
  },
};
</script>