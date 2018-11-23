/*
 * yifei's birthday
 */


var theater = theaterJS()

theater
  .on('type:start, erase:start', function () {
    theater.getCurrentActor().$element.classList.add('actor__content--typing')
  })
  .on('type:end, erase:end', function () {
    theater.getCurrentActor().$element.classList.remove('actor__content--typing')
  })
  .on('type:start, erase:start', function () {
    if (theater.getCurrentActor().name === 'vader') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  })

theater
  .addActor('vader', { speed: 0.6, accuracy: 0.6 })
  .addActor('luke', { speed: 0.6, accuracy: 0.6 })
  .addScene('vader:包嗷嗷子听令！', 600)
  .addScene('luke:？？？', 400)
  .addScene('vader:我是恒成，祝亦菲生日快乐，快乐完回来赶稿，都给你安排好了', 400)
  .addScene('luke:emm...', -6, '!!! ', 600, '谢谢老大。。。', 600)
  .addScene('vader:我是路哥，祝亦菲生日快乐，哈哈哈花钱买快乐', 1600)
  .addScene('luke:谢...', 600, '谢谢路哥！！！鞠躬', 400)
  .addScene('vader:我是老罗，祝亦菲生日快乐，言辞恳切语气真诚', 600)
  .addScene('luke:感激涕零，谢谢老罗', 1600)
  .addScene('vader:我是波酱，我认为你坐地铁过去是赶得上的，嗷对，生日快乐', 800)
  .addScene('luke:波哥说的对', 1600)
  .addScene('vader:我是正正，我是你爸爸，哈哈哈哈哈哈哈', 800)
  .addScene('vader:哎呀，忘讲了，姐姐生日快乐', 800)
  .addScene('luke:惹，谢谢您，不许叫姐姐', 1600)
  .addScene('vader:哦，多花钱了，我和皓正祝你生日快乐，我是林杰，喵', 800)
  .addScene('luke:难为您了', 2000)
  .addScene('vader:我是甜甜小天使雪兰，祝亦菲生日快乐~玩的开心哦~回来教你画画哦~.', 400)
  .addScene('luke:谢雪兰！！！', 600)
  .addScene('vader:还是我，亦菲出去玩看看能不能开发票哦，嘻嘻嘻', 400)
  .addScene('luke:扶额', 600)
  .addScene('vader:我是宇涵，那个亦菲生日快乐啊，你记得玩的时候嫑忘了想下个版本的运营模式，这个钱该怎么花要', 1600)
  .addScene('vader:...放开我！谁给我套的麻袋！！！', 1600)
  .addScene('luke:thank you', 400)
  .addScene('vader:我是您的大寳贝瑟扣李！！！我几亦菲生日快乐，全场最真诚无套路', 600)
  .addScene('luke:从今天起爱你胜过爱我老婆！', 1600)
  .addScene('vader:为了庆祝亦菲生日，恒成决定，全体人员背着亦菲去看毒液，以表祝福，开心！', 1600)
  .addScene('luke:我很开心', 1600)
  .addScene(theater.replay.bind(theater))

