class webpackPlugins{
  constructor(done,fail){
    this.done=done;
    this.fail=fail;
  }
  apply(compiler){
    //监听webpack生命周期里的事件 做出相应处理
     compiler.plugin('done',stats=>{
       this.done(stats)
     })
  }
}