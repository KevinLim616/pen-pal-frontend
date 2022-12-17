<script lang="ts">
    import "../app.css";
    export let path: string;
    export let text: string;
  </script>
  
  <a
    href={path}
    class="lg:py-3 lg:px-6 bg-primary text-white font-bold rounded-full border-none cursor-pointer hover:opacity-80 transition-opacity active:opacity-70"
    >{text}</a
  >
  