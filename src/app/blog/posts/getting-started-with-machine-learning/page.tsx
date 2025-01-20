'use client'

import { IndividualPageFooter } from "@/components/layout/footer/IndividualPageFooter"
import Text from "@/components/ui/text/text"
import TextHeading from "@/components/ui/text-heading/text-heading"
import BaseContainer from "@/components/layout/container/base-container"
import { StackVertical } from "@/components/layout/layout-stack/layout-stack"

import { List, ListItem } from "@/components/ui/list/list"

import Callout from "@/components/blocks/callout/callout"
import Ruler from "@/components/ui/ruler/ruler"
import { DynamicBreadcrumb } from "@/components/ui/primitives/breadcrumb"
import Link from "next/link"
import { SECTION_IDS } from "./section-ids"
import { ThemeToggle } from "@/components/ui/theme/theme-toggle"

export default function GettingStartedWithMLPost() {
  return (
    <>
      <BaseContainer size="md" paddingX="md" paddingY="lg">
        <StackVertical gap="md">
          <div className="flex items-center justify-between">
            <DynamicBreadcrumb 
                items={[
                    { href: '/', label: 'Home', emoji: '👾' },
                    { href: '/blog', label: 'Blog' },
                    { label: 'Getting Started with ML' }
                ]} 
            />
            <ThemeToggle />
          </div>


          <article id={SECTION_IDS.ARTICLE_CONTENT}>

            <TextHeading as="h1">Getting Started with Machine Learning</TextHeading>
            <Text variant="muted" size="xs" className="mb-8">December 25, 2024 | 10 min read</Text>

              <section>
                <StackVertical gap="md">
                  <Text><u><strong>Disclaimer</strong></u>: I am not an expert; I'm a learner, and I've just outlined what has worked for me and although I have tried making it more general, this could still, to some extent, be a subjective list.</Text>
                  
                  <Text weight="bold">This list assumes the following:</Text>
                  <List marker='decimal' spacing='relaxed'>
                      <ListItem>that you have no prior background when it comes to machine learning</ListItem>
                      <ListItem>that you have completed high school math (maybe you've forgotten, but that's okay)</ListItem>
                      <ListItem>that you don't know much about Python but aren't too unfamiliar with programming languages. If you know some Python, awesome. If you're an expert, even better. If you know another programming language, that'll help a lot! You more or less know where you fit here so move forward accordingly; let's assume that you are a beginner in Python (or programming in general).</ListItem>
                    </List>
                  
                  <Text>There's no particular order to this, and the resources I suggest could be subjective. As a learner, you're free to roam around, but having some basic foundation when it comes to math & programming (Python) is key.</Text>
                  
                  <Text>I'm going to paste some materials below. These aren't necessarily in order.</Text>
                  
                  <Text>
                    My suggestion: complete <Link href={`#${SECTION_IDS.MATH.MATH}`} className="text-purple-500 hover:underline"><b>[1]</b></Link>, get some basic understanding of Python (and some PyTorch too if you have time) in <Link href={`#${SECTION_IDS.PROGRAMMING.PROGRAMMING}`} className="text-purple-500 hover:underline"><b>[2]</b></Link> (you do not need to master Python or PyTorch! learn as you go!), complete the 3B1B playlist from <Link href={`#${SECTION_IDS.ML_STUFF.NN_3B1B}`} className="text-purple-500 hover:underline"><b>[3.1.1]</b></Link> — make sure you have a basic high-level understanding of the concepts — and start <Link href={`#${SECTION_IDS.ML_STUFF.ML_HANDS_ON}`} className="text-purple-500 hover:underline"><b>[3.2]</b></Link>. The rest can be done concurrently with something else. Even if you skip some parts, make sure you come back to complete it. When I say this, I'm not talking about the course, but the topic!
                  </Text>
                  
                  <Callout variant='green' title="Note">
                    If you find something from below not good enough or interactive, it's okay to refer to something else to cover that topic. It's all subjective, anyway. You probably know what works best for you. What's important is that you cover that topic in some way.
                  </Callout>
                  
                  <Text>Okay, here's the list.</Text>


                </StackVertical>
              </section>
              <section>
                  <TextHeading as="h2" id={SECTION_IDS.MATH.MATH}>1. Math</TextHeading>
                  <StackVertical gap="md">
                    <Text>Again, this could be subjective but its important to get the absolute foundations down. So, I suggest:</Text>

                    <Ruler color="colorless" marginTop="sm" marginBottom="none"/>
                  
                  <TextHeading as="h3">1.1 Math for ML Specialization</TextHeading>
                  <Text>This specialization covers basic linear algebra, calculus, and statistics required for ML. You don’t need to pay; just audit the courses.</Text>
                  <Text>This series offers a basic fundamental understanding only, which I consider important since being able to understand mathematical intuition is super essential, even if it’s just a basic one.</Text>

                  <Text>Here's the <Link href="https://www.coursera.org/specializations/mathematics-for-machine-learning-and-data-science" target="_blank" className="hover:underline text-purple-500 font-bold">specialization link</Link>.</Text>

                  <Ruler weight='thin' />

                  <TextHeading as="h3">1.2 Essence of Linear Algebra by 3Blue1Brown</TextHeading>
                  <Text>I highly recommend this. The material is in YouTube video format as well as reading format. You can watch/do this concurrently with the linear algebra course above.</Text>
                  
                  <Text>Here's the <Link href="https://www.3blue1brown.com/topics/linear-algebra" target="_blank" className="hover:underline text-purple-500 font-bold">playlist link</Link>.</Text>

                  <Ruler weight='thin' />

                  <TextHeading as="h3">1.3 Differential Equations by 3Blue1Brown</TextHeading>
                  <Text>I highly recommend this playlist as well. YouTube playlist as well as text format available. You can watch/do this concurrently with the calculus course above.</Text>

                  <Text>Here's the <Link href="https://www.3blue1brown.com/topics/differential-equations" target="_blank" className="hover:underline text-purple-500 font-bold">playlist link</Link>.</Text>

                  <Ruler weight='thin' />

                  <TextHeading as="h3">1.4 Essence of Calculus by 3Blue1Brown</TextHeading>
                  <Text>This is my other highly recommended playlist series. YouTube playlist as well as text format available. You can watch/do this concurrently with the calculus course above.</Text>

                  <Text>Here's the <Link href="https://www.3blue1brown.com/topics/calculus" target="_blank" className="hover:underline text-purple-500 font-bold">playlist link</Link>.</Text>

                  <Callout variant='red' title="Disclaimer Regarding the 3B1B Courses">
                    These courses are for getting a high-level preview of the concepts — some sort of a mental model — and are not necessarily to be relied upon for purely learning. For that, you need paper, a pen, and some proper math exercises to solve.
                  </Callout>

                  <Text>This is where my next suggestion comes in.</Text>

                  <Ruler weight='thin'/>

                  <TextHeading as="h3" id={SECTION_IDS.MATH.MATH_ACADEMY}>1.5 Mathematics for Machine Learning, Math Academy</TextHeading>
                  <Text>Not for someone who wants to get the basics done and jump into machine learning relatively quickly. This is a paid course ($49/month) but if you are willing to learn serious math for machine learning (which I highly recommend if you can afford the monthly subscription), this is the best place for ml math (or any sort of math for that matter). My biggest revelation of 2024 has been this website, and this thing ensures you learn. The scaffolding this site applies is something I have never seen anywhere else, and the spaced repetition alongside the site's AI that closely monitors your progress -- always tracking your strengths and weaknesses -- is something I regard one of the best things I've ever seen. This is the best way to learn math, and I highly recommend it. If you're willing to take this route, you do not need to take any math for ml courses anywhere else (except for maybe the 3B1B courses to craft some mental models).</Text>

                  <Text>You can take a look at how this site works <Link href="https://www.mathacademy.com/how-it-works" target="_blank" className="hover:underline text-purple-500 font-bold">here</Link>. I am not affiliated with this site by any means; I just think it's that good.</Text>

                  <Text>Here's the <Link href="https://www.mathacademy.com/courses/mathematics-for-machine-learning" target="_blank" className="hover:underline text-purple-500 font-bold">course link</Link>.</Text>
                </StackVertical>
              </section>

              <Ruler weight="slightlyThick"/>

              <section>
                <TextHeading as="h2" id={SECTION_IDS.PROGRAMMING.PROGRAMMING}>2. Programming</TextHeading>
                <StackVertical gap="md">
                  <Text>
                    Although I'm pretty sure this is something you might already know where to look at to learn, allow me to still paste some materials below and you can see if they might be helpful to you.
                  </Text>

                  <Ruler color="colorless" marginTop="sm" marginBottom="none"/>

                  
                  <TextHeading as="h3" id={SECTION_IDS.PROGRAMMING.PRACTICAL_PYTHON}>2.1 Practical Python by Dabeaz</TextHeading>
                  <Text>I really like this course. It's got roughly 40 hours of intense work that's done mostly in the terminal (which I believe is a great thing to get used to), focusing mainly on script writing, basic data manipulation, and program organization. It's an awesome way to get started with serious Python.</Text>
                  
                  <Text>Here's the <Link href="https://github.com/dabeaz-course/practical-python" target="_blank" className="hover:underline text-purple-500 font-bold">course link</Link>.</Text>

                  <Ruler weight='thin' />
                  
                  <TextHeading as="h3" id={SECTION_IDS.PROGRAMMING.PYTORCH_ZERO_TO_MASTERY}>2.2 PyTorch - Zero to Mastery by Daniel Bourke</TextHeading>
                  <Text>
                    PyTorch is arguably the most popular library for deep learning, and it's the one that's used in most of the research papers. It's a very powerful library that allows us to do a lot of things such as manipulating multiple dimensions of data, implementing and training neural networks, and more. 
                  </Text>
                    
                  <Text>Now, let us swing back to the topic of this PyTorch book. I absolutely adore this series. It's primarily an online book, with a 24-hour YouTube video available (covering the first 5 chapters out of 10) if you're more a video format person (I personally think just referring to the book is fine, but it's up to you). This takes us from the absolute basics of PyTorch and many machine learning concepts in a hands-on, code-first way all the way till implementing a research paper. It's a great way to get started with PyTorch.</Text>
                  
                  <Text>Here's the <Link href="https://www.learnpytorch.io/" target="_blank" className="hover:underline text-purple-500 font-bold">course link</Link> and the <Link href="https://youtu.be/Z_ikDlimN6A" target="_blank" className="hover:underline text-purple-500 font-bold">YouTube video link</Link>.</Text>

                  <Ruler weight='thin' />

                  <TextHeading as="h3">2.3 Official NumPy Docs</TextHeading>
                  <Text>NumPy is a very important library for manipulating data (mostly in the form of arrays when it comes to machine learning). Alongside PyTorch, this is another library that we must know about. PyTorch and NumPy may seem similar, but the main difference lies in the computation: Pytorch tensors (think of them as n-dimensional matrices) are similar to numpy arrays, but can also be operated on GPU. Numpy arrays are mainly used in typical machine learning algorithms (such as k-means or Decision Tree in scikit-learn) whereas PyTorch tensors are mainly used in deep learning which requires heavy matrix computation. You can take a look at this <Link href="https://www.kaggle.com/code/amirmotefaker/pytorch-vs-numpy" target="_blank" className="hover:underline text-purple-500 font-bold">document</Link> for a quick comparison.</Text>

                  <Text>I recommend completing the <Link href="https://numpy.org/doc/stable/user/absolute_beginners.html" target="_blank" className="hover:underline text-purple-500 font-bold">absolute basics</Link> and the <Link href="https://numpy.org/doc/stable/user/basics.html" target="_blank" className="hover:underline text-purple-500 font-bold">fundamentals</Link> sections from the official NumPy documentation to get started.</Text>

                  <Ruler weight='thin' />

                  <TextHeading as="h3" id={SECTION_IDS.PROGRAMMING.PYTORCH_OFFICIAL_DOCS}>2.4 Official PyTorch Docs</TextHeading>
                  <Text>This is the official PyTorch documentation. I highly recommend firstly going through the PyTorch book by Daniel Bourke from <Link href={`#${SECTION_IDS.PROGRAMMING.PYTORCH_ZERO_TO_MASTERY}`} className="hover:underline text-purple-500 font-bold">above</Link>, and then using this documentation as a reference. We do not necessarily need to learn or know everything from it; we just need to know where to look at when we need to.</Text>
                  <Text>Here's the <Link href="https://pytorch.org/docs/stable/index.html" target="_blank" className="hover:underline text-purple-500 font-bold">official documentation link</Link>.</Text>

                  <Ruler weight='thin' />
                  
                  <TextHeading as="h3" id={SECTION_IDS.PROGRAMMING.ADVANCED_PYTHON}>2.5 Advanced Python Mastery by Dabeaz</TextHeading>
                  <Text>This course can be thought of as a more advanced version of the <Link href={`#${SECTION_IDS.PROGRAMMING.PRACTICAL_PYTHON}`} className="hover:underline text-purple-500 font-bold">Practical Python</Link> course. It is not meant for beginners, but for those who have a good grasp of Python and want to learn more advanced topics; therefore, if you want to skip this one, it is completely fine. That being said, if you want to move beyond writing scripts to writing more sophisticated programs and build a more complete mental model of the Python language itself and how it works, this is the course for you.</Text>
                  <Text>Here's the <Link href="https://github.com/dabeaz-course/python-mastery" target="_blank" className="hover:underline text-purple-500 font-bold">course link</Link>.</Text>

                </StackVertical>
              </section>

              <Ruler weight="slightlyThick" />
              
              <section>
                <TextHeading as="h2">3. The "ML" Stuff</TextHeading>
                <StackVertical gap="md">
                  <Text>This section is where I'm going to list out some of the resources I've found useful for getting started with machine learning. People have their own views on how to start this as well, so I’ll list out the ones that worked (and are working) pretty well for me.</Text>

                  <Ruler color="colorless" marginTop="sm" marginBottom="none"/>
                  
                  <TextHeading as="h3">3.1 The "Theory" Stuff</TextHeading>
                  <TextHeading as="h4" id={SECTION_IDS.ML_STUFF.NN_3B1B}>3.1.1 The Neural Network Playlist by 3Blue1Brown</TextHeading>
                  <Text>I consider these videos incredibly intuitive and highly recommend watching this before getting into the crux of machine learning to get a high-level understanding of the concepts. Text format available too!</Text>

                  <Text>Here's the <Link href="https://www.3blue1brown.com/topics/neural-networks" target="_blank" className="hover:underline text-purple-500 font-bold">site link</Link> and the <Link href="https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi" target="_blank" className="hover:underline text-purple-500 font-bold">YouTube playlist link</Link>.</Text>
                  
                  <Ruler weight='thin' />
                  
                  <TextHeading as="h4">3.1.2 Machine Learning Specialization by Andrew Ng</TextHeading>
                  <Text>Andrew Ng is one of the most well-regarded teachers and pionners in the field of Machine Learning, and this recently revised specialization, with its 3 courses, is a great way to get started with the basics of the theory side of machine learning. This specialization also has labs, which, if you have full access to the course, can be done in Python. It does make use of TensorFlow, but you can easily do the labs on your own in PyTorch (or even JAX!) if you want.</Text>
                  
                  <Text>Here's the <Link href="https://www.coursera.org/specializations/machine-learning-introduction" target="_blank" className="hover:underline text-purple-500 font-bold">course link</Link>.</Text>
                  
                  <Ruler weight='thin' />
                  
                  <TextHeading as="h4">3.1.3 ML Playlist by Statquest</TextHeading>
                  <Text>I like to think of Josh Starmer's channel as my go-to for learning anything machine learning or statistics related whenever I run into a concept that I find difficult to understand. I believe his videos are interactive and intuitive, and I use his Statquest videos on ML for reference (just like the <Link href={`#${SECTION_IDS.PROGRAMMING.PYTORCH_OFFICIAL_DOCS}`} className="hover:underline text-purple-500 font-bold">PyTorch docs</Link>). I recommend you do this as well if you feel like it :)</Text>
                  
                  <Text>Here's the <Link href="https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF" target="_blank" className="hover:underline text-purple-500 font-bold">YouTube playlist link</Link>.</Text>
                  
                  <Ruler weight='normal' />
                  

                  <TextHeading as="h3" id={SECTION_IDS.ML_STUFF.ML_HANDS_ON}>3.2 The Hands-On Approach</TextHeading>
                  <Text>As the heading suggests, this section is about the hands-on approach to machine learning. This is where we get our hands dirty and start building things, and personally, I think this is the only way to actually learn to do machine learning. Everything so far has been to lead us to this point, and I think this is the quintessential part of the entire process.</Text>

                  <Ruler color="colorless" marginTop="sm" marginBottom="none"/>
                  
                  <TextHeading as="h4">3.2.1 Machine Learning with PyTorch and Scikit-Learn by Raschka - Liu - Vahid</TextHeading>
                  <Text>The topics that this book covers ranges from traditional machine learning concepts (covering the fundamental concepts surrounding machine learning, including preprocessing the data, model evaluation, hyperparameter tuning, etc.) making use of mainly <Link href="https://scikit-learn.org/stable/" target="_blank" className="hover:underline text-purple-500 font-bold">scikit-learn</Link> to deep learning (such as CNNs, RNNs, Transformers, parallelization, GNNs, Reinforcement Learning, etc.) using <Link href={`#${SECTION_IDS.PROGRAMMING.PYTORCH_OFFICIAL_DOCS}`} className="hover:underline text-purple-500 font-bold">PyTorch</Link>. It's a ridiculously packed book, and I highly recommend it.</Text>


                  <Text>If you are interested in knowing more about the topics covered in this book, you can take a look at the <Link href="https://sebastianraschka.com/books/machine-learning-with-pytorch-and-scikit-learn/" target="_blank" className="hover:underline text-purple-500 font-bold">book link</Link>, <Link href="https://sebastianraschka.com/books/machine-learning-with-pytorch-and-scikit-learn/#preface" target="_blank" className="hover:underline text-purple-500 font-bold">its detailed table of contents</Link>, and <Link href="https://sebastianraschka.com/blog/2022/ml-pytorch-book.html" target="_blank" className="hover:underline text-purple-500 font-bold">the blog by the author</Link> explaining the book content.</Text>

                  <Ruler weight='thin' />
                  
                  <TextHeading as="h4">3.2.2 Neural Network - Zero to Hero Series by Andrej Karpathy</TextHeading>
                  <Text>Andrej Karpathy is one of the most, if not the most, well-regarded instructors in the field of deep learning, and it's incredible that a series like this with its level of quality and detail is available for free. He takes a very hands-on approach to teaching, starting from absolute basics of python classes, derivatives, gradient descent, micrograd, then from a bigram counting model to makemore, nanoGPT, tokenizers, and more.</Text>
                  <Text>As of December 2024, the series is up to 8 parts, and I highly recommend you go through each and every one of them and replicate what he teaches. Andrej is an incredible teacher; all the concepts, regardless of their difficulty, that he illustrates in his videos are extremely well-explained, and the way he builds up everything is something I think is second to none.</Text>

                  <Text>Here's the <Link href="https://github.com/karpathy/nn-zero-to-hero" target="_blank" className="hover:underline text-purple-500 font-bold">link to the series</Link>.</Text>
                </StackVertical>
              </section>
              
              <Ruler />
              
              <section>
                <TextHeading as="h2">4. Some More Resources</TextHeading>
                <StackVertical gap="md">
                  <Text>
                    Do some small-scale side projects too! <Link href="https://www.kaggle.com/" target="_blank" className="hover:underline text-purple-500 font-bold">Kaggle</Link> is nice. Also, try to consume as much as you can from people like <Link href="https://sebastianraschka.com/" target="_blank" className="hover:underline text-purple-500 font-bold">Sebastian Raschka</Link> in addition to <Link href="https://karpathy.ai/" target="_blank" className="hover:underline text-purple-500 font-bold">Andrej Karpathy</Link>.
                  </Text>
                  
                  <Text>
                    You can try reading some ml-related books and read some papers as well. Here are some books I was told are good (<b>I have not yet read them all, so please check them out with your own curiosity</b>). Links are provided for each book.
                  </Text>
                  
                  <List marker='decimal' spacing='relaxed'>
                    <ListItem><Link href="https://udlbook.github.io/udlbook/" target="_blank" className="hover:text-purple-500 hover:underline">Understanding Deep Learning by Simon Prince</Link></ListItem>
                    <ListItem><Link href="https://www.sscardapane.it/alice-book/" target="_blank" className="hover:text-purple-500 hover:underline">Alice's Adventures in Differentiable Wonderland by Scardapane</Link></ListItem>
                    <ListItem><Link href="https://github.com/chiphuyen/dmls-book" target="_blank" className="hover:text-purple-500 hover:underline">Designing Machine Learning Systems by Chip Huyen</Link></ListItem>
                    <ListItem><Link href="https://www.manning.com/books/build-a-large-language-model-from-scratch" target="_blank" className="hover:text-purple-500 hover:underline">Build a Large Language Model from Scratch by Sebastian Raschka</Link></ListItem>
                  </List>
                  <Ruler color="colorless" marginTop="sm" marginBottom="none"/>
                  <Text>
                    <b>For papers</b>, it's quite open but you can take a look at the links below for a kickstart:
                  </Text>
                  
                  <List marker='decimal' spacing='relaxed'>
                    <ListItem><Link href="https://github.com/dair-ai/ML-Papers-Explained" target="_blank" className="hover:text-purple-500 hover:underline">ML Papers Explained by dair.ai</Link></ListItem>
                    <ListItem><Link href="https://github.com/labmlai/annotated_deep_learning_paper_implementations" target="_blank" className="hover:text-purple-500 hover:underline">Annotated Deep Learning Paper Implementations by labml.ai</Link></ListItem>
                  </List> 

                  <Ruler color="colorless" marginTop="sm" marginBottom="none"/>
                  
                  <Text>
                    I also really like <Link href="https://ml-resources.vercel.app/" target="_blank" className="hover:underline text-purple-500 font-bold">this site</Link> that lists out tons of ml resources created by learners and experts alike.
                  </Text>

                  <Text>
                    Lastly, if you want to be a part of the community of driven learners, you can take a look at all the people I follow on <Link href="https://x.com/sumitdotml/following" target="_blank" className="hover:underline text-purple-500 font-bold">Twitter</Link>. These are some of the most active and amazing people I've met online, and I've learned a lot from them.
                  </Text>
                  
                  <Text>
                    Good luck!
                  </Text>
                </StackVertical>
              </section>
          </article>
        </StackVertical>
      </BaseContainer>

      <IndividualPageFooter sectionName="Blog" />
    </>
  )
}
