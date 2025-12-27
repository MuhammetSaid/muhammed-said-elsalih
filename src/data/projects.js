import { WiDayThunderstorm } from 'react-icons/wi'
import projectImage from '../assets/images/Gemini_Generated_Image_1lbnv41lbnv41lbn.png'
import masterImage from '../assets/images/math.png'

// Proje verileri
export const projects = {
  1: {
    id: 1,
    title: "THE IMAM - Islamic Law Assistant (Mobile App)",
    subtitle: "Software and Artificial Intelligence",
    buttons: [ "Language", "Download", "Share", "Ask Question", "GitHub", "Demo"],
    blocks: [
      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "Modern teknolojilerle dini içerikleri birleştiren"
          },
          {
            "type": "bold",
            "content": " The Imam"
          },
          {
            "type": "normal",
            "content": ", kullanıcıların İslami kaynaklardan doğru bilgilere hızlıca ulaşmasını sağlayan yenilikçi bir mobil uygulama. Bu proje, "
          },
          {
            "type": "bold",
            "content": "Retrieval Augmented Generation (RAG) "
          },
          {
            "type": "normal",
            "content": "teknolojisini kullanarak, geleneksel dini metinleri yapay zeka ile buluşturuyor. RAG, yapay zekanın bilgi kaynaklarından öğrenmesini ve kullanıcı sorularına kaynak göstererek cevap vermesini sağlayan bir yaklaşım."
          },
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Title",
        content: {
          "normal": "Proje Hakkında",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          marginTop: '1.4rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Text",
        content: {
          "bold": "The Imam",
          "normal": ", geniş bir İslami kaynak koleksiyonunu vektör tabanlı arama sistemi ile indeksleyen, kullanıcı sorularına kaynak göstererek cevap veren bir AI asistanı. Uygulama, Kuran-ı Kerim, Tefsir kitapları, Fıkıh eserleri ve diğer önemli İslami kaynakları içeren kapsamlı bir veritabanına sahiptir. OpenAI embeddings, ChromaDB ve LangChain/LangGraph gibi modern AI araçları kullanılarak geliştirilmiştir."
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "Title",
        content: {
          "normal": "Ana Özellikler",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },

      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "🤖 AI Destekli Sohbet: Kullanıcı sorularına Kuran, tefsir, fıkıh ve diğer İslami kaynaklardan cevap veren akıllı asistan"
            },
            {
              "type": "normal",
              "content": "📚 Kaynak Gösterimi: Her cevap için ilgili sure ve ayet referansları"
            },
            {
              "type": "normal",
              "content": "🔍 Semantic Search: Anlama dayalı vektör araması ile en ilgili içerikleri bulma"
            },
            {
              "type": "normal",
              "content": "💬 Sohbet Geçmişi: Kullanıcı konuşmalarını MySQL veritabanında kaydetme ve yönetme"
            },
            {
              "type": "normal",
              "content": "🔐 JWT Authentication: Token tabanlı güvenli kullanıcı kimlik doğrulama"
            },
            {
              "type": "normal",
              "content": "📱 Modern Mobil Arayüz: Flutter ile geliştirilmiş kullanıcı dostu tasarım"
            }
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },
      
      // Line
      {
        state: "line",
        style: {
          width: '100%',
          height: '1px',
          backgroundColor: 'var(--text-color)',
          marginTop: '1.4rem',
          marginBottom: '1.4rem',
        }
      },

      // Title
      {
        state: "Title",
        content: {
          "normal": " Nasıl Çalışıyor?",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "The Imam, iki ana parçadan oluşuyor: "
          },
          {
            "type": "bold",
            "content": "mobil uygulama"
          },
          {
            "type": "normal",
            "content": " (Flutter ile geliştirildi) ve "
          },
          {
            "type": "bold",
            "content": "sunucu tarafı "
          },
          {
            "type": "normal",
            "content": "(Python ile yazıldı)."
          },
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "Title",
        content: {
          "normal": "Sunucu Tarafı (Backend)",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "Backend, "
          },
          {
            "type": "bold",
            "content": "Python"
          },
          {
            "type": "normal",
            "content": " ve"
          },
          {
            "type": "bold",
            "content": " FastAPI"
          },
          {
            "type": "normal",
            "content": " framework'ü ile geliştirildi. Sistem, kullanıcı sorularını alıp, İslami kaynaklarda arama yapıyor ve cevapları hazırlıyor. Temel olarak şu adımları izliyor:"
          },
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Vektörleştirme (Embedding): Tüm İslami metinler (Kuran, tefsir, fıkıh vb.) OpenAI'nin text-embedding-3-large modeli kullanılarak vektörlere dönüştürülüyor. Bu işlem, metinleri sayısal değerlere çevirerek bilgisayarın anlayabileceği forma getiriyor. Uzun metinler, RecursiveCharacterTextSplitter kullanılarak yaklaşık 50,000 karakterlik parçalara bölünüyor. Bu parçalama işlemi, OpenAI'nin token limitlerini aşmamak ve daha verimli arama yapabilmek için gerekli."
            },
            {
              "type": "normal",
              "content": "Vektör Veritabanı (ChromaDB): Vektörleştirilmiş metinler, ChromaDB adı verilen özel bir vektör veritabanına kaydediliyor. Her metin parçası, hangi sure, ayet veya kitaptan geldiğini gösteren metadata ile birlikte saklanıyor."
            },
            {
              "type": "normal",
              "content": "Semantic Search (Anlama Dayalı Arama): Kullanıcı bir soru sorduğunda, sistem önce bu soruyu vektörleştiriyor, sonra ChromaDB'de cosine similarity (kosinüs benzerliği) kullanarak en ilgili 3 kaynağı buluyor. Bu arama yöntemi, geleneksel kelime eşleştirmesinden farklı olarak metinlerin anlamına da bakıyor."
            },
            {
              "type": "normal",
              "content": "LLM ile Cevap Oluşturma: Bulunan kaynaklar, GPT-4o-mini modeline context olarak gönderiliyor ve kullanıcının sorusuna uygun bir cevap oluşturuluyor. LangChain ve LangGraph kütüphaneleri, bu süreci yönetiyor ve AI agent'ın kaynakları doğru şekilde kullanmasını sağlıyor."
            }
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
          listStyle: 'decimal',
        }
      },
      {
        state: "Title",
        content: {
          "normal": " Mobil Uygulama (Frontend)",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },
      
      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "Mobil uygulama, "
          },
          {
            "type": "bold",
            "content": "Flutter "
          },
          {
            "type": "normal",
            "content": "framework'ü ile geliştirildi. "
          },
          {
            "type": "bold",
            "content": "Dart "
          },
          {
            "type": "normal",
            "content": "programlama dili kullanılarak yazıldı ve"
          },
          {
            "type": "bold",
            "content": " Material Design 3 "
          },
          {
            "type": "normal",
            "content": "prensiplerine uygun olarak tasarlandı. Uygulama, "
          },
          {
            "type": "bold",
            "content": "RESTful API "
          },
          {
            "type": "normal",
            "content": "ile backend ile iletişim kuruyor. Kullanıcılar:"
          },
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Sorularını yazabiliyor"
            },
            {
              "type": "normal",
              "content": "Cevapları anlık olarak alabiliyor"
            },
            {
              "type": "normal",
              "content": "Kaynak linklerine tıklayarak ilgili bölümlere gidebiliyor"
            },
            {
              "type": "normal",
              "content": "SharedPreferences ile yerel olarak saklanan önceki konuşmalarını görebiliyor"
            }
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },
      {
        state: "line",
        style: {
          width: '100%',
          height: '1px',
          backgroundColor: 'var(--text-color)',
          marginTop: '1.4rem',
          marginBottom: '1.4rem',
        }
      },
      {
        state: "Title",
        content: {
          "normal": " RAG Pipeline: İşleyiş Süreci",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },
      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "Sistem, "
          },
          {
            "type": "bold",
            "content": "RAG (Retrieval Augmented Generation) "
          },
          {
            "type": "normal",
            "content": "yaklaşımını kullanarak çalışıyor. Bu süreç şu adımlardan oluşuyor:"
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Indexing (İndeksleme): Tüm İslami metinler JSON formatından okunuyor, text chunking ile parçalara bölünüyor ve OpenAI embeddings API'si kullanılarak vektörleştiriliyor. Her chunk için metadata (sure numarası, ayet numaraları, kaynak bilgisi) saklanıyor."
            },
            {
              "type": "normal",
              "content": "Query Processing: Kullanıcı sorduğunda, soru da aynı şekilde vektörleştiriliyor."
            },
            {
              "type": "normal",
              "content": "Retrieval: ChromaDB'de similarity search yapılarak en ilgili 3 doküman bulunuyor. Bu işlem, cosine similarity metriği kullanılarak gerçekleştiriliyor."
            },
            {
              "type": "normal",
              "content": "Generation: Bulunan kaynaklar, LangChain üzerinden GPT-4o-mini modeline context olarak gönderiliyor. Model, bu kaynakları kullanarak kullanıcının sorusuna cevap oluşturuyor."
            },
            {
              "type": "normal",
              "content": "Response: Cevap, kaynak metadata'sı ile birlikte kullanıcıya döndürülüyor. Frontend'te, bu kaynaklar tıklanabilir linkler olarak gösteriliyor."
            }
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
          listStyle: 'decimal',
        }
      },
    ],

    description: "İslam şeriati konularında kullanıcılara yardımcı olmak için geliştirilmiş modern bir mobil uygulama. Kullanıcılar İslami hukuk konularında sorular sorabilir ve detaylı cevaplar alabilirler.",
    technologies: ["FastAPI", "LangChain", "Flutter", "MySQL"],
    link: "#",
    github: "#",
    fullDescription: "THE IMAM, İslami hukuk ve şeriat konularında kullanıcılara yardımcı olmak için geliştirilmiş kapsamlı bir mobil uygulamadır. Modern yapay zeka teknolojileri kullanılarak geliştirilmiş bu uygulama, kullanıcıların İslami konularda sorularını yanıtlayabilir ve detaylı bilgi sağlayabilir. FastAPI ile güçlü bir backend altyapısı, LangChain ile gelişmiş dil modeli entegrasyonu ve Flutter ile platformlar arası uyumlu bir kullanıcı arayüzü sunmaktadır."
  },
  2: {
    id: 2,
    title: "E-Commerce Platform",
    description: "Modern ve kullanıcı dostu bir e-ticaret platformu. Güvenli ödeme sistemi, ürün yönetimi ve kullanıcı paneli ile tam özellikli bir alışveriş deneyimi sunar.",
    image: masterImage,
    technologies: ["FastAPI", "Flutter", "MySQL", "Canva"],
    link: "#",
    github: "#",
    fullDescription: "Bu e-ticaret platformu, modern web ve mobil teknolojileri kullanarak geliştirilmiş kapsamlı bir alışveriş deneyimi sunmaktadır. FastAPI ile güçlü ve hızlı bir backend altyapısı, Flutter ile iOS ve Android platformlarında çalışan mobil uygulama ve MySQL ile güvenilir veri depolama sistemi içermektedir. Kullanıcılar güvenli ödeme yapabilir, ürünleri filtreleyebilir ve kolayca sipariş verebilirler."
  },
  3: {
    id: 1,
    title: "Vorteza ERP: Modern, Akıllı ve Entegre Web Tabanlı İşletme Yönetim Sistemi",
    subtitle: "Software and Artificial Intelligence",
    buttons: [ "Language", "Download", "Share", "Ask Question", "GitHub", "Demo"],
    blocks: [
      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "“Yazılım Mühendisliği” dersi kapsamında geliştirdiğimiz Vorteza ERP, bir ders projesinden çok daha fazlası oldu. Modern yazılım mimarileriyle geliştirilen bu web tabanlı ERP sistemi, gerçek dünyadaki kurumsal ihtiyaçlara çözüm sunmayı hedefledi. Bu yazıda, Vorteza ERP’nin her bir modülünü, kullanılan teknolojileri ve geliştirme süreçlerimizi detaylarıyla paylaşıyorum. Press enter or click to view image in full size"
          },
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Title",
        content: {
          "normal": "Neden Vorteza ERP?",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          marginTop: '1.4rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Text",
        content: {
          "normal": "Günümüzde küçük, orta ve büyük ölçekli işletmelerin büyüyen ihtiyaçlarını karşılayacak esnek, güvenli ve modüler ERP çözümlerine olan ihtiyaç her geçen gün artmakta. Biz de bu ihtiyaçtan ilham alarak, işletmelerin iş süreçlerini kolaylaştıracak, kullanıcı dostu, entegre bir sistem geliştirmeyi hedefledik. Bu sistemde sadece teorik bilgi değil, pratikte kullanılabilecek özellikler barındıran gerçek bir ürün ortaya koyduk."
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "Title",
        content: {
          "normal": "Sistem Mimarisi ve Genel Özellikler",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "Vorteza ERP, modüler bir yapıyla geliştirildi. Bu sayede her bir modül, bağımsız çalışabilirken aynı zamanda sistemle entegre bir şekilde sorunsuz işleyebiliyor. Sistemin ana sayfası, blog, yardım, fiyatlandırma ve iletişim gibi halka açık erişilebilen bölümler içeriyor."
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "bosluk",
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },  
      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "Kullanıcı dostu arayüzümüzü modern bir UI/UX anlayışıyla geliştirdik. Özellikle React.js ve Bootstrap birleşimi, sade ama işlevsel bir görünüm sundu. Güvenlik tarafında ise kullanıcı girişlerinde JWT (JSON Web Token) teknolojisini kullandık. Şifreler şifrelenerek saklandı ve kullanıcıya özel token’larla sistem güvenliği sağlandı."
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "Title",
        content: {
          "normal": "İletişim ve Chatbot Entegrasyonu",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "ERP sistemimizin iletişim kısmı çift yönlü bir sistem olarak geliştirildi. Bir yandan kullanıcılar bizimle doğrudan iletişime geçebiliyor, diğer yandan chatbot üzerinden anlık destek alabiliyorlar."
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "bosluk",
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "“Bir insana sor” özelliği ile gönderilen mesajlar, PHP Mailer aracılığıyla e-posta adresimize düşüyor."
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "bosluk",
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "Chatbot tarafında ise, LangChain ve OpenAI API’si ile entegre edilen yapay zekâ destekli, RAG (Retrieval-Augmented Generation) mimarisine sahip akıllı bir destek sistemi sunuyoruz. Bu bot, personelin sıkça sorduğu sorulara otomatik yanıtlar veriyor ve dokümantasyon desteği sağlıyor."
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      
      // Line
      {
        state: "line",
        style: {
          width: '100%',
          height: '1px',
          backgroundColor: 'var(--text-color)',
          marginTop: '1.4rem',
          marginBottom: '1.4rem',
        }
      },

      // Title
      {
        state: "Title",
        content: {
          "normal": "Dashboard ve İstatistikler Modülü",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "Giriş yapan kullanıcıları karşılayan ilk sayfa, dashboard paneli oluyor. Bu panelde, işletmeye özel:"
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Günlük / Aylık satışlar"
            },
            {
              "type": "normal",
              "content": "Aktif müşteri sayısı"
            },
            {
              "type": "normal",
              "content": "Görev durumu ve personel performansı"
            },
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },

      

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "gibi veriler, ECharts.js ve Chart.js kullanılarak dinamik grafikler ile sunulmakta. Bu sayede kullanıcılar, verilerine görsel olarak hızlı ve anlamlı bir şekilde ulaşabiliyor."
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "Title",
        content: {
          "normal": "CRM Modülü",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "Her işletme, müşterileriyle olan etkileşimlerini düzenli bir yapıya oturtmak ister. CRM modülümüz bu ihtiyaca cevap veriyor:"
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Müşteriler, aşama aşama (potansiyel, teklif, anlaşma, satış sonrası vb.) takip edilebiliyor."
            },
            {
              "type": "normal",
              "content": "Dinamik filtreleme ve özel görünüm seçenekleri ile veri takibi oldukça kolaylaştırıldı."
            },
            {
              "type": "normal",
              "content": "Modern arayüzü ve sektörel uyumu sayesinde gerçek dünyadaki CRM sistemlerine benzer bir deneyim sunuyoruz."
            },
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },

      {
        state: "Title",
        content: {
          "normal": "Görev Yönetimi (Yapılacaklar) Modülü",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "Bir işletme içerisindeki personellerin görev dağılımı ve takibi oldukça önemli. Bu amaçla geliştirdiğimiz Görev Yönetimi modülünde:"
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Her görev bir son teslim tarihi ve sorumlu personel ile tanımlanabiliyor."
            },
            {
              "type": "normal",
              "content": "Görevler “topluluklar” halinde gruplandırılabiliyor."
            },
            {
              "type": "normal",
              "content": "Her görev topluluğuna özel bir yorum bölümü ile tartışmalar yapılabiliyor."
            },
            {
              "type": "normal",
              "content": "Bu yapı sayesinde ekip içi etkileşim ve sorumluluk paylaşımı net bir şekilde organize edilebiliyor."
            },
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },

      {
        state: "Title",
        content: {
          "normal": "Pazarlama (Marketing) Modülü",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "İşletmelerin kampanya başlatması ve hedef kitlesine ulaşması için bir pazarlama modülü geliştirdik. Burada işletme sahibi:"
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Kampanya başlığı, açıklaması ve hedef şartları belirleyebiliyor."
            },
            {
              "type": "normal",
              "content": "Bu kampanya, otomatik olarak Mail yoluyla müşterilere gönderiliyor."
            },
            {
              "type": "normal",
              "content": "Bu modül ile birlikte ERP sistemi, sadece bir iç yönetim aracı değil, dışa dönük bir pazarlama desteği de sunar hale geldi."
            }
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },

      {
        state: "Title",
        content: {
          "normal": "Chatbot Modülü (AI)",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "Bu modül, sistemin en yenilikçi parçalarından biri olarak geliştirildi. İki bölümden oluşuyor:"
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Text",
        content: [
          {
            "type": "bold",
            "content": "Yardım Sayfasındaki Kullanıcı Chatbot’u:"
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      
      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Basit kullanıcı sorularını hızlıca cevaplayan, yardım ve yönlendirme sağlayan bir sistem."
            }
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },
      {
        state: "bosluk",
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      }, 
      {
        state: "Text",
        content: [
          {
            "type": "bold",
            "content": "AI Chatbot (RAG Mimarisi ile):"
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      
      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Bu modül özel olarak geliştirildi ve sistem belgelerine dayalı olarak çalışan bir RAG (Retrieval-Augmented Generation) mimarisi kullandı."
            },
            {
              "type": "normal",
              "content": "Langchain ve OpenAI API entegrasyonu ile geliştirildi."
            },
            {
              "type": "normal",
              "content": "Şu anda sabit dökümantasyonlardan yanıt üretiyor, ancak ilerleyen zamanlarda doğrudan veri tabanı bağlantısıyla gerçek zamanlı içerik sunarak personellere büyük kolaylık sağlamayı hedefliyoruz. Press enter or click to view image in full size"
            }
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      }, 

      {
        state: "Title",
        content: {
          "normal": "Kargo (Shipping) Modülü",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },

      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Yeni kargo oluşturma"
            },
            {
              "type": "normal",
              "content": "Kargo güncelleme ve silme"
            },
            {
              "type": "normal",
              "content": "Kargo durum takibi ve işlem geçmişi"
            }
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "Kargo modülümüz sayesinde işletmeler, gönderim süreçlerini sistem üzerinden detaylı şekilde yönetebiliyor. Kargo oluşturma ekranında alıcı bilgileri, gönderim adresi ve kargo içeriği gibi alanlar yer alırken; her bir işlem ayrı ayrı kaydedilmekte ve loglanmaktadır. Bu da hem güvenliği hem de izlenebilirliği artırmaktadır."
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "Title",
        content: {
          "normal": "Personel ve Ayarlar Modülü",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "İşletme sahiplerinin yetkilendirme ve yönetim işlemlerini kolayca yapabilmesi için bir Ayarlar paneli geliştirdik. Bu panelden:"
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Personel ekleme, silme, güncelleme işlemleri yapılabiliyor."
            },
            {
              "type": "normal",
              "content": "Yetki düzeyleri ve roller belirlenebiliyor."
            },
            {
              "type": "normal",
              "content": "Sistem bu anlamda sadece kullanıcı yönetimi değil, aynı zamanda kurumsal rol bazlı kontrol mekanizması da sunuyor."
            }
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },
      
      {
        state: "line",
        style: {
          width: '100%',
          height: '1px',
          backgroundColor: 'var(--text-color)',
          marginTop: '1.4rem',
          marginBottom: '1.4rem',
        }
      },
    ],

    description: "İslam şeriati konularında kullanıcılara yardımcı olmak için geliştirilmiş modern bir mobil uygulama. Kullanıcılar İslami hukuk konularında sorular sorabilir ve detaylı cevaplar alabilirler.",
    technologies: ["FastAPI", "LangChain", "Flutter", "MySQL"],
    link: "#",
    github: "#",
    fullDescription: "THE IMAM, İslami hukuk ve şeriat konularında kullanıcılara yardımcı olmak için geliştirilmiş kapsamlı bir mobil uygulamadır. Modern yapay zeka teknolojileri kullanılarak geliştirilmiş bu uygulama, kullanıcıların İslami konularda sorularını yanıtlayabilir ve detaylı bilgi sağlayabilir. FastAPI ile güçlü bir backend altyapısı, LangChain ile gelişmiş dil modeli entegrasyonu ve Flutter ile platformlar arası uyumlu bir kullanıcı arayüzü sunmaktadır."
  },
  4: {
    id: 1,
    title: "Aiksir Chat — Kendi Özelleştirilebilir Chatbotunuzu Oluşturun!",
    subtitle: "Software and Artificial Intelligence",
    buttons: [ "Language", "Download", "Share", "Ask Question", "GitHub", "Demo"],
    blocks: [
      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "Günümüzde yapay zeka tabanlı chatbotlar, müşteri hizmetlerinden bilgi yönetimine kadar pek çok alanda aktif olarak kullanılıyor. Bu artan talep ve potansiyel kullanım alanlarını göz önünde bulundurarak, ben de kendi chatbot projemi geliştirmeye karar verdim. Ancak amacım, yalnızca basit bir sohbet botu oluşturmak değildi. Her kullanıcının ihtiyaçlarına göre özelleştirebileceği, yönetebileceği ve farklı senaryolara uyarlayabileceği esnek bir sistem geliştirmeyi hedefledim."
          },
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "bosluk",
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },  
      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "Bu süreçte, açık kaynaklı bir proje olan Anything LLM Embed’i temel alarak, projeyi nasıl daha güçlü ve fonksiyonel bir chatbot sistemine dönüştürdüğümü adım adım anlatacağım. Özelleştirilebilir özellikler, sohbet kayıt sistemleri ve akıllı asistan entegrasyonlarıyla zenginleştirdiğim bu projede yaşadığım teknik detayları, karşılaştığım zorlukları ve geliştirdiğim çözümleri bu yazıda paylaşacağım."
          },
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Title",
        content: {
          "normal": "Projeye Başlangıç",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          marginTop: '1.4rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Text",
        content: {
          "normal": "Chatbot sistemini geliştirirken, öncelikle sağlam ve esnek bir temel oluşturacak bir yapı arayışına girdim. Araştırmalarım sonucunda Anything LLM Embed adlı açık kaynaklı bir projeyle karşılaştım. Bu proje, yalnızca frontend tarafında çalışan ve tek bir göreve odaklanan basit bir yapı sunuyordu. Ancak benim hedefim, bu projeyi çok daha fonksiyonel, kullanıcı dostu ve ölçeklenebilir bir sisteme dönüştürmekti."
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "bosluk",
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },  
      {
        state: "Text",
        content: {
          "normal": "Bu doğrultuda attığım ilk adım, sisteme bir veritabanı eklemek oldu. MySQL kullanarak gerçekleştirdiğim bu entegrasyon sayesinde, kullanıcıların kendi chatbotlarını oluşturabilmeleri ve bu botlara özel verileri güvenli bir şekilde saklayabilmeleri mümkün hale geldi. Veritabanı sayesinde her kullanıcıya özel sohbet geçmişi, bot ayarları ve diğer kişiselleştirilmiş veriler güvenle tutulabiliyordu."
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "bosluk",
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      }, 
      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "Bir sonraki aşamada ise, projeye bir backend ekleyerek veri yönetimini daha kontrollü hale getirdim ve kullanıcı kimlik doğrulama süreçlerini yapılandırdım. "
          },
          {
            "type": "bold",
            "content": "Backend tarafında, veritabanı ile iletişimi PHP kullanarak sağladım; gelen mesajları alıp cevap verme işlemlerini ise FastAPI ile yönettim."
          },
          {
            "type": "normal",
            "content": "Bu sayede, bir site sahibi veya kullanıcı chatbot hizmetinden faydalanmak istediğinde sisteme kolayca kayıt olup kendi ihtiyaçlarına özel bir bot oluşturabiliyordu. Bu yapı, yalnızca bireysel kullanıcılar için değil, aynı zamanda çoklu müşterilere hizmet verecek daha geniş kapsamlı bir sistem için de sağlam bir temel sundu."
          },
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "line",
        style: {
          width: '100%',
          height: '1px',
          backgroundColor: 'var(--text-color)',
          marginTop: '1.4rem',
          marginBottom: '1.4rem',
        }
      },
      {
        state: "Title",
        content: {
          "normal": "Kullanıcı Kayıt Sistemi ve Benzersiz Kimlik Tanımlaması",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          marginTop: '1.4rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Text",
        content: {
          "normal": "Bir kullanıcının sisteme kayıt olmasıyla birlikte, benzersiz bir müşteri ID’si (embed ID) oluşturulmasını sağladım. Bu ID, kullanıcının chatbot hizmetini yönetmesini ve kendi sitesinde chatbotu çalıştırmasını sağlayan temel bileşendi. Kullanıcının bu embed ID ile sisteme bağlanmasını sağlamak için aşağıdaki formatta bir JavaScript kodu oluşturdum:"
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "bosluk",
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      }, 
      {
        state: "Text",
        content: {
          "normal": "Bu script sayesinde kullanıcı, kendi web sitesine chatbotu kolayca entegre edebiliyor ve API aracılığıyla chatbot hizmetinden yararlanabiliyor. Kullanıcı istediği zaman bu kodu değiştirebilir ve chatbotunun görünümünü, davranışını veya özelliklerini güncelleyebilir."
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Title",
        content: {
          "normal": "Chatbot Özelleştirme Seçenekleri",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          marginTop: '1.4rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Text",
        content: {
          "normal": "Sistemin en önemli özelliklerinden biri, kullanıcının chatbotunu tamamen özelleştirebilmesi oldu. Kullanıcılar, kendi sitelerinin tasarımına uygun şekilde chatbotlarını özelleştirebilirler. Aşağıda chatbotun özelleştirilebileceği bazı parametreleri sıraladım:"
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Chatbotun ana rengi"
            },
            {
              "type": "normal",
              "content": "Chatbotun adı ve logosu"
            },
            {
              "type": "normal",
              "content": "Chatbotun davranış biçimi ve yanıt verme sınırları"
            },
            {
              "type": "normal",
              "content": "Chatbotun yüksekliği ve genişliği"
            },
            {
              "type": "normal",
              "content": "Sayfada hangi konumda yer alacağı (sağ, sol, üst, alt)"
            },
            {
              "type": "normal",
              "content": "Yazı tipi ve büyüklüğü"
            },
            {
              "type": "normal",
              "content": "Açma kapama butonunun tasarımı"
            }
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },
      {
        state: "Text",
        content: {
          "normal": "Kullanıcılar, bu özellikleri yönetim panelinden kolayca değiştirebilir ve herhangi bir değişiklik anında chatbotlarına yansır. Böylece, her müşteri kendi sitesine uygun, benzersiz bir chatbot oluşturma imkanına sahip olur."
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Title",
        content: {
          "normal": "Kullanıcı Konuşmalarının Takibi ve Yönetimi",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          marginTop: '1.4rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Text",
        content: {
          "normal": "Chatbotun bir diğer önemli özelliği, kullanıcı sohbetlerinin kayıt altına alınması oldu. Bir müşteri sitesine chatbot eklediğinde, siteyi ziyaret eden her kullanıcıya benzersiz bir session ID atandı. Bu session ID sayesinde, kullanıcının sohbet geçmişi kaydedildi ve gerektiğinde tekrar erişilebilecek şekilde saklandı."
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "bosluk",
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      }, 

      {
        state: "Text",
        content: {
          "normal": "Bunun büyük avantajları oldu. Eğer bir kullanıcı chatbotla yaptığı konuşmayı kaybetmek istemiyorsa, bu sohbet veri tabanında saklanarak kalıcı hale geliyordu. Ancak kullanıcı, istediği zaman “Reset Chat” butonuna basarak sohbeti sıfırlayabiliyordu. Sohbet sıfırlandığında, sistem yeni bir boş satır ekleyerek en son oluşturulan kaydı boş olarak gösteriyordu. Bu sayede, kullanıcıya sohbet geçmişinin tamamen silindiği hissi veriliyordu."
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "bosluk",
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      }, 

      {
        state: "Text",
        content: {
          "normal": "Bu özellik, hem kullanıcıların deneyimini geliştirdi hem de site sahiplerine müşteri etkileşimlerini daha iyi analiz etme imkanı sundu. Site sahibi, herhangi bir hata veya yanlış anlaşılma durumunda belirli bir session ID ile sohbet geçmişini inceleyebilir ve müşteri deneyimini iyileştirebilirdi."
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "Title",
        content: {
          "normal": "Yapay Zeka Entegrasyonu",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          marginTop: '1.4rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Text",
        content: {
          "normal": "Chatbotu daha akıllı hale getirmek için yapay zeka entegrasyonu gerçekleştirdim. CrewAI kullanarak OpenAI API’si ile bir Agent oluşturdum. Bu agent, kullanıcıların chatbot ile daha akıcı ve doğal bir şekilde etkileşim kurmasını sağladı."
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Text",
        content: {
          "normal": "Geliştirdiğim sistemde chatbot, kullanıcıya önceden belirlenmiş kurallar çerçevesinde yanıt veriyordu. Kullanıcıya en iyi yanıtı sunmak için aşağıdaki kurallar belirlendi:"
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Kullanıcının isteğini tam olarak anlayarak en uygun yanıtı sunmak"
            },
            {
              "type": "normal",
              "content": "Kullanıcının daha önce yaptığı konuşmaları analiz ederek bağlamı korumak"
            },
            {
              "type": "normal",
              "content": "Sadece doğruluğundan emin olduğu bilgileri sunmak"
            },
            {
              "type": "normal",
              "content": "Kullanıcının deneyimini iyileştirmek için net ve anlaşılır yanıtlar vermek"
            },
            {
              "type": "normal",
              "content": "Gereksiz ve yanıltıcı bilgilerden kaçınmak"
            }
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
          listStyle: 'decimal',
        }
      },
      {
        state: "bosluk",
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },  
      {
        state: "Text",
        content: {
          "normal": "Bunun yanında, her chatbot belirli bir marka veya web sitesine hizmet ettiği için, chatbotun verdiği yanıtları o sitenin içeriğiyle sınırlandırdım. Yani, bir chatbot “X şirketinin müşteri hizmetleri” olarak çalışıyorsa, yalnızca X şirketiyle ilgili sorulara yanıt veriyor ve kullanıcıyı yanlış yönlendirmiyordu."
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

    ],

    description: "İslam şeriati konularında kullanıcılara yardımcı olmak için geliştirilmiş modern bir mobil uygulama. Kullanıcılar İslami hukuk konularında sorular sorabilir ve detaylı cevaplar alabilirler.",
    technologies: ["FastAPI", "LangChain", "Flutter", "MySQL"],
    link: "#",
    github: "#",
    fullDescription: "THE IMAM, İslami hukuk ve şeriat konularında kullanıcılara yardımcı olmak için geliştirilmiş kapsamlı bir mobil uygulamadır. Modern yapay zeka teknolojileri kullanılarak geliştirilmiş bu uygulama, kullanıcıların İslami konularda sorularını yanıtlayabilir ve detaylı bilgi sağlayabilir. FastAPI ile güçlü bir backend altyapısı, LangChain ile gelişmiş dil modeli entegrasyonu ve Flutter ile platformlar arası uyumlu bir kullanıcı arayüzü sunmaktadır."
  },
  5: {
    id: 5,
    title: "Weather App",
    description: "Gerçek zamanlı hava durumu uygulaması. Kullanıcı dostu arayüz ve detaylı hava durumu bilgileri sunan modern bir mobil uygulama.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800",
    technologies: ["React Native", "API", "TypeScript"],
    link: "#",
    github: "#",
    fullDescription: "Gerçek zamanlı hava durumu bilgileri sunan modern bir mobil uygulamadır. React Native ile iOS ve Android platformlarında çalışan cross-platform uygulama, hava durumu API'leri ile entegre edilmiş ve TypeScript ile tip güvenliği sağlanmıştır. Kullanıcılar mevcut konumlarına göre hava durumunu görebilir, farklı şehirler için arama yapabilir ve detaylı hava durumu bilgilerini görüntüleyebilirler."
  }
}