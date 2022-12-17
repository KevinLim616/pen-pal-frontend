<script lang="ts">
    import "../app.css"
    let signUp:boolean = false
    export let icon:string;
    export let width:string
    export let text:string
    export let fontStyle:string
    export let btnStyle:string
</script>


<div class={btnStyle}>
    <iconify-icon icon={icon} width={width}></iconify-icon>
    <h3 class={fontStyle}>{text}</h3>
</div>
