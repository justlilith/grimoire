<script lang='ts'>
  import { marked } from 'marked'
  import { onMount } from 'svelte';
  import * as Helpers from '$lib/ts/helpers'
  import ScrollNotifier from '$lib/components/ScrollNotifier.svelte'
  
  onMount(()=> {
    Helpers.addRainbowBackground('work-images')
  })
  
  export let work:WorkEntryT
</script>

<div class='work'>
  <!-- <h3>{work.title}</h3> -->
  {@html marked(work.description)}
  {#if work["imageURLs"].length > 1}
  <div class='work-images'>
    <ScrollNotifier></ScrollNotifier>
    {#each work["imageURLs"] as url}
    <img src={url} alt={work.title}/>
    {/each}
  </div>
  {:else}
  <img class='work-image' src={work["imageURLs"][0]} alt={work.title}/>
  {/if}
</div>

<style lang='scss'>
  .work-images {
    height:50vh;
    overflow-y: scroll;
    scrollbar-width: none;
    position: relative;
  }
  
  img {
    // object-fit: cover;
    // height: 90%;
    width: 100%;
    margin-bottom: 5px;
  }

  .work {
    padding-bottom: 100px;
    border-bottom: thin solid #666;
  }

  .work:last-of-type {
    padding-bottom: 100px;
    border-bottom: none;
  }
</style>