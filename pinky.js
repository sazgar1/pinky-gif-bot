const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "g*";

client.on("ready", () => {
  console.log('');
  console.log('By Pinky');/////Pinky 
console.log('');
console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`${prefix}help | ${client.guilds.size} Guilds`)///////Write something
 client.user.setStatus("online")/////Write it down with your own heart
  console.log(`Logined`)
})

client.on("message", message => {
  if (message.content.startsWith(prefix + "boy", "Boy")) {
    let boy = [
      "https://media.discordapp.net/attachments/786897044483604490/803870769313480714/Enes_Acar_GIF_70.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870793716858880/a_57a7f6c875e3a329b170edf177392911.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870817351368734/5-2.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804007829010513966/image1.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804007829483552838/image3.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804219672513478706/Lenora_36.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804220384899498064/Lenora_28.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804220394697392158/Lenora_33.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804315371271749662/image0-20.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804968359572930580/ALANIS_MAN_GIF_156.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804968381816111124/image0-5.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804760463044640808/ALANIS_MAN_GIF_99.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870704999202836/ENES_ACAR_GIF_104.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870737941135421/ENES_ACAR_GIF_15.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870682479067166/ENES_ACAR_GIF_135.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} BOY GIFS  `,
          image: {
            url: boy[Math.floor(Math.random() * boy.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "girl", "Girl")) {
    let girl = [
      "https://media.discordapp.net/attachments/786897045436366849/804968189892755456/image2-1.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804968223577604126/gif472.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804968231794245642/rexsin_212.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804968258859827210/pintrst___luri_4.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804983128527077387/a_177ddfe86ad32b68be6200f007682136.gif",
      "https://media.discordapp.net/attachments/786897045436366849/805008600334073866/3WIu.gif",
      "https://media.discordapp.net/attachments/786897045436366849/805370008330436648/image0.gif",
      "https://media.discordapp.net/attachments/786897045436366849/805008566439641128/image0.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804681217022099466/a_3c85d4517fbaf4f750d344820b49c076.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804682936615829504/image0.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804314115601596426/ALANIS_WOMAN_GIF_176.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804280612227383316/ALANIS_WOMAN_GIF_138.gif",
      "https://cdn.discordapp.com/attachments/737803232600129608/824252723997179904/aq1.gif",
      "https://cdn.discordapp.com/attachments/737803232600129608/825425393125294110/g1.gif",
      "https://cdn.discordapp.com/attachments/737803232600129608/825425382357991514/g2.gif",
      "https://cdn.discordapp.com/attachments/737803232600129608/825425373151756288/g3.gif",
      "https://cdn.discordapp.com/attachments/737803232600129608/825425364632600636/g4.gif",
      "https://cdn.discordapp.com/attachments/737803232600129608/825425340938977320/g6.gif",
    ];


    message.channel
      .send({
        embed: {
          description: `${message.author.username} **GIRL GIFS**  `,
          image: {
            url: boy[Math.floor(Math.random() * boy.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "sad", "Sad")) {
    let sads = [
      "https://media.discordapp.net/attachments/786897045952790550/798719676795715614/Zeyrox_43.gif",
      "https://media.discordapp.net/attachments/786897045952790550/799435191323852820/luisa1-1.gif",
      "https://media.discordapp.net/attachments/786897045952790550/799435254011920404/a_caf4fdc4f3e516fcabec0022078c38ab.gif",
      "https://media.discordapp.net/attachments/786897045952790550/804040753072439326/038842117446a0c76a922d23727942b1.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787581071079768074/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787581004424544256/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787580974975549450/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787580943627976704/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/802930927784820766/Cedric_Anime_Gif_81.gif",
      "https://media.discordapp.net/attachments/786897045952790550/802722301984243712/a_66f26e072e89a58c1879c6fa27744bd7.gif",
      "https://media.discordapp.net/attachments/786897045952790550/801054305569865778/uzgun-4.gif",
      "https://media.discordapp.net/attachments/786897044483604490/806288916160315422/image0.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} **SAD GIFS**`,
          image: {
            url: sads[Math.floor(Math.random() * sads.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "couple", "Couple")) {
    let couple = [
      "https://media.discordapp.net/attachments/608711480346542102/782233713538498600/hit_gif_5.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782286421020508170/image0_1.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782284851570147358/image0-1-4.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782406047473467422/image0.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782148760997593098/a_8bc52b6080ce3079988c6e49f84c4b03.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782445443665625128/ezgif-7-2032ed99845d.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782196955488321556/a_637b8e2042d540a1e5e28282e3fe5cc7.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803307812608409600/image0.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869330005688340/a_130ce69bc8c1f06d917ee668f7051b64.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869344266321931/dans4.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869587988152340/gif.13.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869653641854996/20210105_223539.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869660814376960/a_09fbaba0301c6db194af2f0c6d2a6a93.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804188805204410378/2.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804337804179275776/16-10-27-tenor.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804759240451424256/Lrows_Gif_25.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804759252899594259/ciftler8.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username}   **COUPLE GIFS**  `,
          image: {
            url: couple[Math.floor(Math.random() * couple.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
    
client.on("message", message => {
  if (message.content.startsWith(prefix + "smoking", "Smoking")) {
    let smoking = [
      "https://cdn.discordapp.com/attachments/737811068373696613/788727095832215552/image0.gif",
      "https://cdn.discordapp.com/attachments/721044386217197699/791318188091506688/a_7f74a56ababf00f0124066f1775d47f8.gif",
      "https://cdn.discordapp.com/attachments/737811068373696613/783983875940286504/19.gif",
      "https://cdn.discordapp.com/attachments/763481718560391179/792812718478196776/17.gif",
      "https://cdn.discordapp.com/attachments/737811068373696613/779351606105473044/e61.gif",
      "https://cdn.discordapp.com/attachments/737811068373696613/787314679503519774/image0.gif",
      "https://cdn.discordapp.com/attachments/737811068373696613/799649642664165387/image0.gif",
      "https://cdn.discordapp.com/attachments/721044386217197699/798253282337882132/brsw.gif",
      "https://cdn.discordapp.com/attachments/737811068373696613/799650350277722162/image0.gif",
      "https://cdn.discordapp.com/attachments/737811068373696613/812066646298198117/image0.gif",
      "https://cdn.discordapp.com/attachments/737811068373696613/812066653500211240/image0.gif",
      "https://cdn.discordapp.com/attachments/737811068373696613/812066647112155236/image0.gif",
      "https://cdn.discordapp.com/attachments/737811068373696613/791921993812410378/image0.gif",
      "https://cdn.discordapp.com/attachments/737811068373696613/780792309763407892/image0.gif",
      "https://cdn.discordapp.com/attachments/721044386217197699/796041233574920252/a_297374b7ab2737c843864500018294b8.gif",
      "https://cdn.discordapp.com/attachments/721044386217197699/791198578835062784/Swqly_53.gif",
      "https://cdn.discordapp.com/attachments/737811068373696613/789408013080854528/image0.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username}   **SMOKING GIFS**  `,
          image: {
            url: smoking[Math.floor(Math.random() * smoking.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "baby", "Baby")) {
    let baby = [
      "https://cdn.discordapp.com/attachments/699339066029768796/828318432914178099/a_b34472f908cdb414da324b03a1e22a20.gif",
      "https://cdn.discordapp.com/attachments/699339066029768796/828318403474489374/Atlantik_dil.gif",
      "https://cdn.discordapp.com/attachments/699339066029768796/828318342963920916/786947729267490858.gif",
      "https://cdn.discordapp.com/attachments/699339066029768796/828318316723961856/780161690716209163.gif",
      "https://cdn.discordapp.com/attachments/699339066029768796/828318286873624646/image3.gif",
      "https://cdn.discordapp.com/attachments/699339066029768796/828318258092441600/image6.gif",
      "https://cdn.discordapp.com/attachments/699339066029768796/828318215935229972/751919742100701234.gif",
      "https://cdn.discordapp.com/attachments/699339066029768796/828318187392860190/781189745362468875.gif",
      "https://cdn.discordapp.com/attachments/699339066029768796/828318160079552562/a_5b9adb71ce95ae822352d5141cf5ec03.gif",
      "https://cdn.discordapp.com/attachments/699339066029768796/828318133205860382/image0_5-1-1.gif",
      "https://cdn.discordapp.com/attachments/699339066029768796/828318106627342346/Swqly_27.gif",
      "https://cdn.discordapp.com/attachments/699339066029768796/828318068676624414/777884280126570516.gif",
      "https://cdn.discordapp.com/attachments/699339066029768796/828318034803818516/777884387094036491.gif",
      "https://cdn.discordapp.com/attachments/699339066029768796/828317894684311602/777884360710946837.gif",
      "https://cdn.discordapp.com/attachments/699339066029768796/828274376289550336/a_bb2bace8fd9ac8e5bef35f4ff7e8c990.gif",
      "https://cdn.discordapp.com/attachments/699339066029768796/828274295221256213/taerragif2.gif",
      "https://cdn.discordapp.com/attachments/699339066029768796/828274075725987865/image0-3.gif",
      "https://cdn.discordapp.com/attachments/699339066029768796/828273926647054376/taerragif.gif",
      "https://cdn.discordapp.com/attachments/699339066029768796/828273457396449310/2_1.gif",
      "https://cdn.discordapp.com/attachments/699339066029768796/828273359262318662/davsan.gif",
      "https://cdn.discordapp.com/attachments/699339066029768796/828272878897856522/a_2eb97e798e514d9ddc8e0dbd3153ca9c.gif",
      "https://cdn.discordapp.com/attachments/699339066029768796/828263974822084638/image2_2.gif",
      "https://cdn.discordapp.com/attachments/699339066029768796/828225041992253460/image1.gif",
      "https://cdn.discordapp.com/attachments/699339066029768796/827909819113275422/tenor-2.gif",
      "https://cdn.discordapp.com/attachments/699339066029768796/827909817624297482/image4.gif",
      "https://cdn.discordapp.com/attachments/699339066029768796/827909743733243915/image0.gif",
    ];
    message.channel
      .send({
        embed: {
          description: `**${message.author.username} **BABY GIFS** `,
          image: {
            url: baby[Math.floor(Math.random() * baby.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
    
client.on("message", message => {
  if (message.content.startsWith(prefix + "anime", "Anime")) {
    let anime = [
      "https://cdn.discordapp.com/attachments/608711485849337856/828535311813443614/4b883eafef23b6352ec8a002febbc92c.png",
      "https://cdn.discordapp.com/attachments/608711485849337856/828535240631779368/e1a101d5d5e9a9324fb347fddc8150b5.gif",
      "https://cdn.discordapp.com/attachments/608711485849337856/828535240313405450/36c108ec5c56cc3d3982fcb1f763281b.gif",
      "https://cdn.discordapp.com/attachments/608711485849337856/828534618969735188/0c3cee12e72919def1ddb675efcac179.gif",
      "https://cdn.discordapp.com/attachments/608711485849337856/828534618353434635/983ce3238413bab4160d3e7c1a556d16.gif",
      "https://cdn.discordapp.com/attachments/737803741037854750/824796690752995388/1531488049_b1e18b26-92ca-49d3-bcde-cf5d88a787f0.gif",
      "https://cdn.discordapp.com/attachments/737803741037854750/824257271609425969/p6.gif",
      "https://cdn.discordapp.com/attachments/737803741037854750/824257244421292042/p4.gif",
      "https://cdn.discordapp.com/attachments/737803741037854750/824257230903705641/p3.gif",
      "https://cdn.discordapp.com/attachments/737803741037854750/824257214536744970/p2.gif",
      "https://cdn.discordapp.com/attachments/737803741037854750/824257214536744970/p2.gif",
      "https://cdn.discordapp.com/attachments/737803741037854750/824257203368099880/p1.gif",
      "https://cdn.discordapp.com/attachments/737803741037854750/822619401496559616/f82abffafd1d1912e70ec97c1be4e5d18971b3b2_hq.gif",
      "https://cdn.discordapp.com/attachments/737803741037854750/820676555289395251/e166c8de80cc312b590bc35650b0b5b90ef0dd83_hq.gif",
      "https://cdn.discordapp.com/attachments/737803741037854750/820386987742986300/da8665c-3f45aa7d-7306-4d75-a6d7-c876723508e0.gif",
      "https://cdn.discordapp.com/attachments/737803741037854750/820386913704869949/91cf2a6d90d1fd589aad4a32cba5f69e.gif",
      "https://cdn.discordapp.com/attachments/737803741037854750/820386868801175562/original.gif",
      "https://cdn.discordapp.com/attachments/737803741037854750/819991121496506368/image0.gif",
      "https://cdn.discordapp.com/attachments/737803741037854750/819991008334708796/image0.gif",
      "https://cdn.discordapp.com/attachments/737803741037854750/819991009739014154/image0.gif",
      "https://cdn.discordapp.com/attachments/737803741037854750/819990994891702292/image0.gif",
      "https://cdn.discordapp.com/attachments/737803741037854750/819990959956688927/image0.gif",
      "https://cdn.discordapp.com/attachments/737803741037854750/819990935713611828/image0.gif",
      "https://cdn.discordapp.com/attachments/737803741037854750/817525557545533471/image0.gif"
    ];
    message.channel
      .send({
        embed: {
          description: `**${message.author.username} **ANIME GIFS** `,
          image: {
            url: anime[Math.floor(Math.random() * anime.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
    
client.on("message", message => {
  if (message.content.startsWith(prefix + "animal", "Animal")) {
    let animal = [
      "https://cdn.discordapp.com/attachments/737807699412254811/812067970858745946/image0.gif",
      "https://cdn.discordapp.com/attachments/737807699412254811/805859499008851978/image0.gif",
      "https://cdn.discordapp.com/attachments/737807699412254811/805857957140234240/image0.gif",
      "https://cdn.discordapp.com/attachments/737807699412254811/801939027997622343/image0.gif",
      "https://cdn.discordapp.com/attachments/737807699412254811/801939021436944454/image0.gif",
      "https://cdn.discordapp.com/attachments/737807699412254811/801939015061602344/image0.gif",
      "https://cdn.discordapp.com/attachments/737807699412254811/801939012054286346/image0.gif",
      "https://cdn.discordapp.com/attachments/737807699412254811/801938735603253269/image3.gif",
      "https://cdn.discordapp.com/attachments/737807699412254811/796029760127500319/giphy_2.gif",
      "https://cdn.discordapp.com/attachments/737807699412254811/796029734844235806/howling-wolf-m.gif",
      "https://cdn.discordapp.com/attachments/737807699412254811/796029692431433828/kedi_1.gif",
      "https://cdn.discordapp.com/attachments/737807699412254811/796029640677785600/a_8117fcc70d276dc566c26eeb472eea38.gif",
      "https://cdn.discordapp.com/attachments/737807699412254811/796029631128010782/tenor_80.gif",
      "https://cdn.discordapp.com/attachments/737807699412254811/796029615419949056/jiavmkpcfrca86poffnc.gif",
      "https://cdn.discordapp.com/attachments/737807699412254811/796029542635405342/tenor_74.gif",
      "https://cdn.discordapp.com/attachments/737807699412254811/796029376226656256/image0.gif",
      "https://cdn.discordapp.com/attachments/737807699412254811/796029375425937418/kedi_kavga.gif",
      "https://cdn.discordapp.com/attachments/737807699412254811/796029373391437894/a_2ddb9c7b1ea59dd2217d87e5ecde1e88.gif",
      "https://cdn.discordapp.com/attachments/737807699412254811/796029370393296916/a_8f666096782dcc1a49bff9ea09e801ec.gif",
      "https://cdn.discordapp.com/attachments/737807699412254811/795949091031875614/a_94c64b0b10c68089124d16171e0fec05.gif",
      "https://cdn.discordapp.com/attachments/737807699412254811/791927410131206164/image0.gif",
      "https://cdn.discordapp.com/attachments/737807699412254811/791927398798196766/image0.gif",
      "https://cdn.discordapp.com/attachments/737807699412254811/791927398886015016/image0.gif",
      "https://cdn.discordapp.com/attachments/737807699412254811/791927390527553557/image0.gif"
    ];
    message.channel
      .send({
        embed: {
          description: `**${message.author.username} **ANIMAL GIFS** `,
          image: {
            url: animal[Math.floor(Math.random() * animal.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
    
client.on("message", message => {
  if (message.content.startsWith(prefix + "aesthetic", "Aesthetic")) {
    let aesthetic = [
      "https://cdn.discordapp.com/attachments/737804426642718763/811607388901343242/image0.gif",
      "https://cdn.discordapp.com/attachments/737804426642718763/811607350111764510/image0.gif",
      "https://cdn.discordapp.com/attachments/737804426642718763/811607252816625664/image0.gif",
      "https://cdn.discordapp.com/attachments/737804426642718763/811607233019641866/image0.gif",
      "https://cdn.discordapp.com/attachments/737804426642718763/811607147091066920/image0.gif",
      "https://cdn.discordapp.com/attachments/737804426642718763/811607133082484796/image0.gif",
      "https://cdn.discordapp.com/attachments/737804426642718763/810982689473036288/e5.gif",
      "https://cdn.discordapp.com/attachments/737804426642718763/810982649753108480/e4.gif",
      "https://cdn.discordapp.com/attachments/737804426642718763/810982601782853642/image3.gif",
      "https://cdn.discordapp.com/attachments/737804426642718763/805678218181869578/g5.gif",
      "https://cdn.discordapp.com/attachments/737804426642718763/805678216131641344/g4.gif",
      "https://cdn.discordapp.com/attachments/737804426642718763/805678212528341022/g3.gif",
      "https://cdn.discordapp.com/attachments/737804426642718763/805678209193607198/g2.gif",
      "https://cdn.discordapp.com/attachments/737804426642718763/805678208757530644/g1.gif",
      "https://cdn.discordapp.com/attachments/737804426642718763/798822567058210816/q1.gif",
      "https://cdn.discordapp.com/attachments/737804426642718763/798073536307527700/w22.gif",
      "https://cdn.discordapp.com/attachments/737804426642718763/798073479975010304/w23.gif",
      "https://cdn.discordapp.com/attachments/737804426642718763/798073464169824296/w21.gif",
      "https://cdn.discordapp.com/attachments/737804426642718763/798073353138339862/w20.gif",
      "https://cdn.discordapp.com/attachments/737804426642718763/798073344171573298/w19.gif",
      "https://cdn.discordapp.com/attachments/737804426642718763/798073251334979684/w17.gif",
      "https://cdn.discordapp.com/attachments/737804426642718763/798073242786725918/w18.gif",
      "https://cdn.discordapp.com/attachments/737804426642718763/798073217340145684/w16.gif",
      "https://cdn.discordapp.com/attachments/737804426642718763/798073202231214120/w15.gif",
    ];
    message.channel
      .send({
        embed: {
          description: `**${message.author.username} **AESTHETIC GIFS** `,
          image: {
            url: aesthetic[Math.floor(Math.random() * aesthetic.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
    
client.on("message", message => {
  if (message.content.startsWith(prefix + "emoji", "Emoji")) {
    let emoji = [
      "https://cdn.discordapp.com/attachments/772439349056634890/800058033329012796/image0.gif",
      "https://cdn.discordapp.com/attachments/772439349056634890/800058011074166814/image0.gif",
      "https://cdn.discordapp.com/attachments/772439349056634890/800057995450384384/image0.gif",
      "https://cdn.discordapp.com/attachments/772439349056634890/800057917624811540/image0.gif",
      "https://cdn.discordapp.com/attachments/772439349056634890/800057706613702686/image0.gif",
      "https://cdn.discordapp.com/attachments/772439349056634890/800057546786209792/image0.gif",
      "https://cdn.discordapp.com/attachments/772439349056634890/800057099727536148/image0.gif",
      "https://cdn.discordapp.com/attachments/772439349056634890/800057059264430141/image0.gif",
      "https://cdn.discordapp.com/attachments/772439349056634890/800057008308748398/image0.gif",
      "https://cdn.discordapp.com/attachments/772439349056634890/800056838225788968/image0.gif",
      "https://cdn.discordapp.com/attachments/772439349056634890/800056809553002546/image0.gif",
      "https://cdn.discordapp.com/attachments/772439349056634890/800056815227502662/image0.gif",
      "https://cdn.discordapp.com/attachments/772439349056634890/800056826837467159/image0.gif",
      "https://cdn.discordapp.com/attachments/772439349056634890/799288376325832754/image6.gif",
      "https://cdn.discordapp.com/attachments/772439349056634890/799288352410828870/image2.gif",
      "https://cdn.discordapp.com/attachments/772439349056634890/796071986224300042/Zil_2_Gif.gif",
      "https://cdn.discordapp.com/attachments/772439349056634890/796055907594665994/Asales.6.gif",
      "https://cdn.discordapp.com/attachments/772439349056634890/794117939515228160/image0.gif",
      "https://cdn.discordapp.com/emojis/779961566367055874.gif",
      "https://cdn.discordapp.com/emojis/768871613666951169.gif",
      "https://cdn.discordapp.com/emojis/767730946534277182.gif",
      "https://cdn.discordapp.com/emojis/801228387486007326.gif",
      "https://cdn.discordapp.com/attachments/755636694035857438/826003057023647774/765905130238509107.gif",
      "https://cdn.discordapp.com/attachments/755636694035857438/826003092096811049/767730118633586729.gif",
      "https://cdn.discordapp.com/attachments/755636694035857438/826003075542024232/766511947906154576.gif",
      "https://cdn.discordapp.com/attachments/755636694035857438/826003030330572810/797799470061584405.gif",
      "https://cdn.discordapp.com/emojis/770771287744184340.gif",
      "https://cdn.discordapp.com/emojis/802384066154070036.gif",
    ];
    message.channel
      .send({
        embed: {
          description: `**${message.author.username} **EMOJI GIFS** `,
          image: {
            url: emoji[Math.floor(Math.random() * emoji.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
    
client.on("message", message => {
  if (message.content.startsWith(prefix + "neon", "Neon")) {
    let neon = [
      "https://cdn.discordapp.com/attachments/764927608013193276/812066791411941417/image0.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/812066790564823100/image0.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/809198992616718336/image0-3.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/805858628618813450/image0.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/805858344366505994/image0.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/805153926902710332/image0.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/801942926603059210/image0.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/801942442193453096/image1.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/801942441237544987/image0.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/801942425454772274/image1.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/801942424749342740/image0.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/801942418513461328/image1.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/801942418080923689/image0.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/801942413123125309/image1.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/801942412800294943/image0.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/801942400633274408/image1.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/801942291785973800/image0.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/801942276741398558/image2.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/801942276502061106/image1.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/801942276217372672/image0.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/801942266742702130/image0.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/801942258848759818/image0.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/801941970817777684/image1.gif",
      "https://cdn.discordapp.com/attachments/764927608013193276/801941960381825034/image1.gif",
    ];
    message.channel
      .send({
        embed: {
          description: `**${message.author.username} **NEON GIFS** `,
          image: {
            url: neon[Math.floor(Math.random() * neon.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
    
client.on("message", message => {
  if (message.content.startsWith(prefix + "black and white", "Black and white", "Black And White")) {
    let blackandwhite = [
      "https://cdn.discordapp.com/attachments/757155993124732928/808043851445043220/g4.gif",
      "https://cdn.discordapp.com/attachments/757155993124732928/808043848323825714/g3.gif",
      "https://cdn.discordapp.com/attachments/757155993124732928/808043844892753940/g2.gif",
      "https://cdn.discordapp.com/attachments/757155993124732928/808043841764327464/g1.gif",
      "https://cdn.discordapp.com/attachments/757155993124732928/801953182477320275/image4.gif",
      "https://cdn.discordapp.com/attachments/757155993124732928/801953182149640202/image3.gif",
      "https://cdn.discordapp.com/attachments/757155993124732928/801953181616832513/image2.gif",
      "https://cdn.discordapp.com/attachments/757155993124732928/801953180974841906/image0.gif",
      "https://cdn.discordapp.com/attachments/757155993124732928/801953169222795324/image3.gif",
      "https://cdn.discordapp.com/attachments/757155993124732928/801953168920543302/image2.gif",
      "https://cdn.discordapp.com/attachments/757155993124732928/801953168527196190/image1.gif",
      "https://cdn.discordapp.com/attachments/757155993124732928/801953167893987368/image0.gif",
      "https://cdn.discordapp.com/attachments/757155993124732928/801953146468696064/image0.gif",
      "https://cdn.discordapp.com/attachments/757155993124732928/801953140576092200/image0.gif",
      "https://cdn.discordapp.com/attachments/757155993124732928/801952967447674880/image3.gif",
      "https://cdn.discordapp.com/attachments/757155993124732928/801952966831243282/image2.gif",
      "https://cdn.discordapp.com/attachments/757155993124732928/801952966499237988/image1.gif",
      "https://cdn.discordapp.com/attachments/757155993124732928/801952966243516416/image0.gif",
      "https://cdn.discordapp.com/attachments/757155993124732928/801952951388209202/image3.gif",
      "https://cdn.discordapp.com/attachments/757155993124732928/801952951123050526/image2.gif",
      "https://cdn.discordapp.com/attachments/757155993124732928/801952950834036776/image1.gif",
      "https://cdn.discordapp.com/attachments/757155993124732928/801952950448422942/image0.gif",
      "https://cdn.discordapp.com/attachments/757155993124732928/801952940432687175/image3.gif",
      "https://cdn.discordapp.com/attachments/757155993124732928/801952939635507240/image0.gif",
    ];
    message.channel
      .send({
        embed: {
          description: `**${message.author.username} **BLACK AND WHITE GIFS** `,
          image: {
            url: blackandwhite[Math.floor(Math.random() * blackandwhite.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", async message => {
  if (message.content.toLowerCase() === prefix + "Profile", "profile", "p", "P"") {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 200).then(
      message.channel.send({
        files: [
          {
            name: "prfoilebycutie.png",
            attachment: `https://api.probot.io/profile/${message.author.id}`
          }
        ]
      })
    );
  }
});
    
client.on("message", async msg => {
  if (msg.content === prefix + "server", "Server") {
    var w1 = msg.guild.createdAt.getFullYear();
    var w2 = msg.guild.createdAt.getMonth();
    var w3 = msg.guild.createdAt.getDate();
    let embed = new Discord.RichEmbed()
      .addField("**   | NAME SERVER**: ", msg.guild.name)
      .addField("**   | ID SERVER**:", msg.guild.id)
      .addField("**   | OWNER SHIP **: ", msg.guild.owner)
      .addField("**   | MEMBER COUNT**: ", msg.guild.memberCount)
      .addField("**   | REGION SERVER**: ", msg.guild.region)
      .addField("**   | CHANNEL COUNTS**: ", msg.guild.channels.size)
      .addField("**   | ROLES COUNTS**: ", msg.guild.roles.size)
      .setColor("RANDOM")
      .setImage(
        ""
      )
      .setFooter(`${msg.guild.name}`);
    msg.channel.sendEmbed(embed);
  }
});
    
client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "bot", "Bot") {
    const bot = new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setColor("RANDOM")
      .addField(
        " |**PING BOT** : ",
        `» ${Date.now() - message.createdTimestamp}` + " ms",
        true
      )
      .addField(
        " |**SERVERS** :  ",
        `» ${client.guilds.size}`,
        true
      )
      .addField(
        " |**CHANNELS** : ",
        `» ${client.channels.size} `,
        true
      )
      .addField(
        " |**BOT NAME** :  ",
        `» ${client.user.tag} `,
        true
      )
      .addField(
        " |**OWNER BOT** :  ",
        `» <@790232202134421554>`,
        true
      ) //  Pinky Is One
      .setImage(
        ""
      )
      .setFooter(message.author.username, message.author.avatarURL);
    message.channel.send(bot);
  }
});
    
client.on('message', black => {
  if (black.content.startsWith(prefix + "status", "Status")) {
  black.channel.send({
  embed: new Discord.RichEmbed()
  
     .setColor('RANDOM')
     .addField('``__Guilds__``', [client.guilds.size], true)
     .setFooter(message.author.username, message.author.avatarURL)       
  })
  }
  });
    
client.on("message", async message => {
    if(message.content.startsWith(prefix + "invite", "inv", "Invite")) {
        let invite = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setAuthor(message.author.username, message.author.displayAvatarURL)
            .setThumbnail(message.author.avatarURL)
            .setImage(
        ""
      )
            .setTitle(" :link: | **Link Bot**")
            .setURL(``);///link bot
            message.channel.sendEmbed(invite);
 
  }
});
    
client.on("message", message => {
  if (message.content === prefix + "help", "Help", "HELP", "h", "H") {
    var addserver = ``;
    var SUPPORT = ``;
    var website = ``;
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setThumbnail(message.author.avatarURL)
      .setFooter("")
      .setImage(
        ""
      )
      .setColor("RANDOM").setDescription(` 
    
<a:kitty:822641640933556234> | **Info Commands**

> profile - bot - status - server - invite

<a:kitty:828251571787006043> | **Gifs Commands**

> boy - girl - couple - anime - animal - emoji - neon - baby - sad - smoking - aesthetic - black and white

<a:emoji_75:828615179704729621> | **Emotions Commands**

> kiss - hug - kill - slap - love

<a:emoji_62:826691316024868904> | **Funny Commands**

> iq - ship - gay - smip - meme - boom

<a:kitty:827215400257323038> | **Links**

[ Support Server]() 
[ Link Bot]() 
`);
    
client.on("message", message => {
  if (message.content.startsWith(prefix + "avatar", "Avatar",)) {
    if (!message.channel.guild) return;
    var mentionned = message.mentions.users.first();
    var client;
    if (mentionned) {
      var client = mentionned;
    } else {
      var client = message.author;
    }
    const embed = new Discord.RichEmbed()
      .addField("Requested by:", "<@" + message.author.id + ">")
      .setColor("RANDOM")
      .setImage(`${client.avatarURL}`)
      .setFooter(message.author.username);
    message.channel.sendEmbed(embed);
  }
});

client.on('message', CAROL => {
    if(CAROL.content.startsWith(prefix + "ship", "Ship")) {
        const lvl = Math.floor(Math.random() * 100) + 1 ;
        const owner = CAROL.author ;
        return CAROL.channel.send(` ${lvl}% | Ship :revolving_hearts: `)
    }
});
    
client.on('message', CAROL => {
    if(CAROL.content.startsWith(prefix + "iq", "Iq", "IQ")) {
        const lvl = Math.floor(Math.random() * 100) + 1 ;
        const owner = CAROL.author ;
        return CAROL.channel.send(` ${lvl}% |  IQ :brain:  `)
    }
});

client.on('message', CAROL => {
    if(CAROL.content.startsWith(prefix + "simp", "Simp")) {
        const lvl = Math.floor(Math.random() * 100) + 1 ;
        const owner = CAROL.author ;
        return CAROL.channel.send(` ${lvl}% |  Simp  `)
    }
});
    
client.on('message', CAROL => {
    if(CAROL.content.startsWith(prefix + "Gay", "gay")) {
        const lvl = Math.floor(Math.random() * 100) + 1 ;
        const owner = CAROL.author ;
        return CAROL.channel.send(` ${lvl}% |  Gay :rainbow_flag:   `)
    }
});
    
client.on("message", message => {
  if (message.content.startsWith(prefix + "meme", "Meme")) {
    let meme = [
      "https://cdn.discordapp.com/attachments/750309650439602196/757981917625975015/image0.jpg",
      "https://cdn.discordapp.com/attachments/750309650439602196/760521279060050001/image0.png",
      "https://cdn.discordapp.com/attachments/750309650439602196/760521288409415720/image0.png",
      "https://cdn.discordapp.com/attachments/750309650439602196/760521294852259880/image0.png",
      "https://cdn.discordapp.com/attachments/750309650439602196/760521299738230814/image0.png",
      "https://cdn.discordapp.com/attachments/750309650439602196/761487449104449536/image0.png",
      "https://cdn.discordapp.com/attachments/680928395399266314/828650571295752272/mymeme_2.png",
      "https://cdn.discordapp.com/attachments/680928395399266314/828650494968201246/You.jpg",
      "https://cdn.discordapp.com/attachments/680928395399266314/828650236083044402/FB_IMG_1612523388938.jpg",
      "https://cdn.discordapp.com/attachments/680928395399266314/828650064037675068/wholesomenkinkylove_20210307_CJC1.jpg",
      "https://i.redd.it/ox3vqpltmyq61.png",
      "https://i.redd.it/2flqz4dlaqq61.jpg",
      "https://i.redd.it/5ndz7tectrq61.jpg",
      "https://i.redd.it/3okeboqnjiq61.jpg",
      "https://i.redd.it/s4q0crz7ccq61.jpg",
      "https://i.redd.it/o1wmvagwaeq61.jpg",
      "https://i.redd.it/k0fcfxalntp61.jpg",
      "https://i.redd.it/sbcfikwq1qp61.jpg",
    ];
    message.channel
      .send({
        embed: {
          description: `**${message.author.username} **MEME GIFS AND PHOTOS** `,
          image: {
            url: meme[Math.floor(Math.random() * meme.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "boom", "Boom")) {
    let bom = [
      "https://media.giphy.com/media/Xp98Vi5OBvhXpwA0Zp/giphy.gif",
      "https://media.giphy.com/media/POnwee2RZBWmWWCeiX/giphy.gif",
      "https://media.giphy.com/media/oywQ7OhnYupINQa0L4/giphy.gif",
      "https://media.giphy.com/media/5aLrlDiJPMPFS/giphy.gif",
      "https://media.giphy.com/media/l1BgS9aNtdCdjgkaQ/giphy.gif",
      "https://media.giphy.com/media/d0NnEG1WnnXqg/giphy.gif",
      "https://media.giphy.com/media/NmrqUdwGXPOog/giphy.gif",
      "https://media.giphy.com/media/dpnfPvaCIHBrW/giphy.gif",
      "https://media.giphy.com/media/mks5DcSGjhQ1a/giphy.gif",
      "https://media.giphy.com/media/8wfoaIjVc0FBaLu5xH/giphy.gif",
      "https://media.giphy.com/media/xThtanBNixj1O1m5oY/giphy.gif",
      "https://media.giphy.com/media/fdGkCOiM0oOqI/giphy.gif",
      "https://media.giphy.com/media/c862b2dAhJXYA/giphy.gif",
      "https://media.giphy.com/media/CepTYjGRbV1ba/giphy.gif",
      "https://media.giphy.com/media/sRGCQ7INgSD0qbTqB5/giphy.gif",
      "https://media.giphy.com/media/ZJYOwl8SbFsic/giphy.gif",
      "https://media.giphy.com/media/3oEhmKspQX9EN48HNm/giphy.gif",
      "https://media.giphy.com/media/l1KVcAP6jvP9r4MaA/giphy.gif",
      "https://media.giphy.com/media/j2mY6orBJqAdG/giphy.gif",
      "https://media.giphy.com/media/3oz8xEqn8AGAQbR0yY/giphy.gif",
      "https://media.giphy.com/media/l4lQW9KfRQscU0ds4/giphy.gif",
      "https://media.giphy.com/media/XathaB5ILqSME/giphy.gif",
      "https://media.giphy.com/media/26AHvF2p5pridaSf6/giphy.gif",
      "https://media.giphy.com/media/Nlur5uO8GkjC0/giphy.gif",
      "https://media.giphy.com/media/l1J3preURPiwjRPvG/giphy.gif",
      "https://media.giphy.com/media/8cdZit2ZcjTri/giphy.gif",
      "https://media.giphy.com/media/3o7btNa0RUYa5E7iiQ/giphy.gif",
      "https://media.giphy.com/media/V88pTEefkoOFG/giphy.gif",
      "https://media.giphy.com/media/rfWAomOTPeOo8/giphy.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} **BOOM** `,
          image: {
            url: bom[Math.floor(Math.random() * bom.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
    
client.on("message", message => {
  if (message.content.startsWith(prefix + "kiss", "Kiss")) {
    let kiss = [
      "https://tenor.com/view/kiss-love-gif-19168972",
      "https://cdn.nekos.life/kiss/kiss_053.gif",
      "https://cdn.nekos.life/kiss/kiss_081.gif",
      "https://cdn.nekos.life/kiss/kiss_035.gif",
      "https://cdn.nekos.life/kiss/kiss_032.gif",
      "https://cdn.nekos.life/kiss/kiss_036.gif",
      "https://cdn.nekos.life/kiss/kiss_037.gif",
      "https://cdn.nekos.life/kiss/kiss_038.gif",
      "https://cdn.nekos.life/kiss/kiss_039.gif",
      "https://cdn.nekos.life/kiss/kiss_040.gif",
      "https://cdn.nekos.life/kiss/kiss_041.gif",
      "https://cdn.nekos.life/kiss/kiss_042.gif",
      "https://cdn.nekos.life/kiss/kiss_044.gif",
      "https://cdn.nekos.life/kiss/kiss_043.gif",
      "https://cdn.nekos.life/kiss/kiss_045.gif",
      "https://cdn.nekos.life/kiss/kiss_046.gif",
      "https://cdn.nekos.life/kiss/kiss_047.gif",
      "https://cdn.nekos.life/kiss/kiss_048.gif",
      "https://cdn.nekos.life/kiss/kiss_049.gif",
      "https://cdn.nekos.life/kiss/kiss_050.gif",
      "https://cdn.nekos.life/kiss/kiss_051.gif",
      "https://cdn.nekos.life/kiss/kiss_052.gif",
      "https://cdn.nekos.life/kiss/kiss_053.gif",
      "https://cdn.nekos.life/kiss/kiss_054.gif"
    ];
    message.channel
      .send({
        embed: {
          description: `**${message.author.username} **KISS** `,
          image: {
            url: kiss[Math.floor(Math.random() * kiss.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "hug", "Hug")) {
    let hug = [
      "https://cdn.nekos.life/hug/hug_007.gif",
      "https://cdn.nekos.life/hug/hug_031.gif",
      "https://cdn.nekos.life/hug/hug_032.gif",
      "https://cdn.nekos.life/hug/hug_033.gif",
      "https://cdn.nekos.life/hug/hug_034.gif",
      "https://cdn.nekos.life/hug/hug_035.gif",
      "https://cdn.nekos.life/hug/hug_036.gif",
      "https://cdn.nekos.life/hug/hug_037.gif",
      "https://cdn.nekos.life/hug/hug_038.gif",
      "https://cdn.nekos.life/hug/hug_039.gif",
      "https://cdn.nekos.life/hug/hug_040.gif",
      "https://cdn.nekos.life/hug/hug_041.gif",
      "https://cdn.nekos.life/hug/hug_042.gif",
      "https://cdn.nekos.life/hug/hug_043.gif",
      "https://cdn.nekos.life/hug/hug_044.gif",
      "https://cdn.nekos.life/hug/hug_045.gif",
      "https://cdn.nekos.life/hug/hug_046.gif",
      "https://cdn.nekos.life/hug/hug_047.gif",
      "https://cdn.nekos.life/hug/hug_048.gif",
      "https://cdn.nekos.life/hug/hug_049.gif",
      "https://cdn.nekos.life/hug/hug_050.gif",
      "https://cdn.nekos.life/hug/hug_051.gif",
      "https://cdn.nekos.life/hug/hug_052.gif",
      "https://cdn.nekos.life/hug/hug_053.gif"
    ];
    message.channel
      .send({
        embed: {
          description: `**${message.author.username} **HUGS** `,
          image: {
            url: hug[Math.floor(Math.random() * hug.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "slap")) {
    let slap = [
      "https://cdn.nekos.life/slap/slap_014.gif",
      "https://cdn.nekos.life/slap/slap_013.gif",
      "https://cdn.nekos.life/slap/slap_015.gif",
      "https://cdn.nekos.life/slap/slap_016.gif",
      "https://cdn.nekos.life/slap/slap_017.gif",
      "https://cdn.nekos.life/slap/slap_018.gif",
      "https://cdn.nekos.life/slap/slap_020.gif",
      "https://cdn.nekos.life/slap/slap_021.gif",
      "https://cdn.nekos.life/slap/slap_022.gif",
      "https://cdn.nekos.life/slap/slap_023.gif",
    ];
    message.channel
      .send({
        embed: {
          description: `**${message.author.username} **SLAP** `,
          image: {
            url: slap[Math.floor(Math.random() * slap.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "love")) {
    let love = [
      "https://cdn.discordapp.com/attachments/809745497223856159/810433340276211732/12b086764cabba75a58572a76790e00a.gif",
      "https://cdn.discordapp.com/attachments/804197037671186434/811686417277255720/Sy6Ai6ODb.gif",
      "https://cdn.discordapp.com/attachments/730875200958103623/803022903498113044/image0.gif",
      "https://cdn.discordapp.com/attachments/730875200958103623/803022886503579678/image0.gif",
      "https://cdn.discordapp.com/attachments/730875200958103623/803028515595354212/image0.gif",
      "https://cdn.discordapp.com/attachments/730875200958103623/803028508799795200/image0.gif",
    ];
    message.channel
      .send({
        embed: {
          description: `**${message.author.username} **LOVE** `,
          image: {
            url: love[Math.floor(Math.random() * love.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
// Events

client.login("");
